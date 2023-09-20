package com.marugy.app.domain.Member.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.marugy.app.domain.Member.Dto.request.MessageRequest;
import com.marugy.app.domain.Member.Dto.request.SmsRequest;
import com.marugy.app.domain.Member.Dto.response.SmsResponse;
import com.marugy.app.global.util.RedisUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
//@PropertySource("classpath:application.yml")
@Slf4j
@RequiredArgsConstructor
@Service
public class SmsService {

    //휴대폰 인증 번호
    private final String smsConfirmNum = createSmsKey();
    private final RedisUtil redisUtil;
//    private final Environment env;

    @Value("${naver-cloud-sms.accessKey}")
    private String accessKey;

    @Value("${naver-cloud-sms.secretKey}")
    private String secretKey;

    @Value("${naver-cloud-sms.serviceId}")
    private String serviceId;

    @Value("${naver-cloud-sms.senderPhone}")
    private String phone;

    //spring core에서 값을 읽어
//    public SmsService(Environment env) {
//        this.env = env;
//        this.accessKey = env.getProperty("naver-cloud-sms.accessKey");
//
//    }

    public String getSignature(String time) throws NoSuchAlgorithmException, UnsupportedEncodingException, InvalidKeyException {
        String space = " ";
        String newLine = "\n";
        String method = "POST";
        String url = "/sms/v2/services/"+ this.serviceId+"/messages";
        String accessKey = this.accessKey;
        String secretKey = this.secretKey;

        String message = new StringBuilder()
                .append(method)
                .append(space)
                .append(url)
                .append(newLine)
                .append(time)
                .append(newLine)
                .append(accessKey)
                .toString();

        SecretKeySpec signingKey = new SecretKeySpec(secretKey.getBytes("UTF-8"), "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(signingKey);

        byte[] rawHmac = mac.doFinal(message.getBytes("UTF-8"));
        String encodeBase64String = Base64.encodeBase64String(rawHmac);

        return encodeBase64String;
    }

    public SmsResponse sendSms(MessageRequest messageRequest) throws JsonProcessingException, RestClientException, URISyntaxException, InvalidKeyException, NoSuchAlgorithmException, UnsupportedEncodingException {
        String time = Long.toString(System.currentTimeMillis());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-ncp-apigw-timestamp", time);
        headers.set("x-ncp-iam-access-key", accessKey);
        headers.set("x-ncp-apigw-signature-v2", getSignature(time)); // signature 서명

        List<MessageRequest> messages = new ArrayList<>();
        messages.add(messageRequest);

        SmsRequest request = SmsRequest.builder()
                .type("SMS")
                .contentType("COMM")
                .countryCode("82")
                .from(phone)
                .content("[태산:泰山] 인증번호 [" + smsConfirmNum + "]를 입력해주세요")
                .messages(messages)
                .build();

        //쌓은 바디를 json형태로 반환
        ObjectMapper objectMapper = new ObjectMapper();
        String body = objectMapper.writeValueAsString(request);

        // jsonBody와 헤더 조립
        HttpEntity<String> httpBody = new HttpEntity<>(body, headers);

        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory());

        //restTemplate로 post 요청 보내고 오류가 없으면 202코드 반환
        SmsResponse smsResponse = restTemplate.postForObject(new URI("https://sens.apigw.ntruss.com/sms/v2/services/"+ serviceId +"/messages"), httpBody, SmsResponse.class);
        SmsResponse responseDto = new SmsResponse(smsConfirmNum);
        redisUtil.setDataExpire(smsConfirmNum, messageRequest.getTo(), 60 * 3L); // 유효시간 3분
        return smsResponse;
    }



    // 인증코드 만들기
    public static String createSmsKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 5; i++) { // 인증코드 5자리
            key.append((rnd.nextInt(10)));
        }
        return key.toString();
    }

    public String verifyEmail(String key) throws ChangeSetPersister.NotFoundException {
        String memberPhone = redisUtil.getData(key); //key값은 인증번호, value는 전화번호
        if (memberPhone == null) {
            throw new ChangeSetPersister.NotFoundException();
        }
        redisUtil.deleteData(key);
        return memberPhone;
    }


}
