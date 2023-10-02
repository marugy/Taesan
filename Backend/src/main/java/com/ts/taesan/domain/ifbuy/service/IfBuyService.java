package com.ts.taesan.domain.ifbuy.service;

import com.sun.xml.bind.v2.TODO;
import com.ts.taesan.domain.ifbuy.api.dto.request.IfbuyRegisterRequest;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyItem;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyListResponse;
import com.ts.taesan.domain.ifbuy.api.dto.response.MostBuyItem;
import com.ts.taesan.domain.ifbuy.entity.IfBuyEntity;
import com.ts.taesan.domain.ifbuy.repository.IfBuyQRepository;
import com.ts.taesan.domain.ifbuy.repository.IfBuyRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.transaction.repository.TransactionQRepository;
import com.ts.taesan.domain.transaction.repository.TransactionRepository;
import com.ts.taesan.global.entity.UploadFile;
import com.ts.taesan.global.util.FileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class IfBuyService {

    private final IfBuyQRepository ifBuyQRepository;
    private final IfBuyRepository ifBuyRepository;
    private final MemberRepository memberRepository;
    private final TransactionQRepository transactionRepository;
    private final FileUtil fileStore;

    Map<String, List<String>> productInfo = new ConcurrentHashMap<>();
    @PostConstruct
    private void init() {
        // 초기화 처리
        productInfo.put("대형마트", Arrays.asList("쌀과자", "4000"));
        productInfo.put("편의점", Arrays.asList("젤리", "1500"));
        productInfo.put("음식점", Arrays.asList("국밥", "8000"));
        productInfo.put("카페", Arrays.asList("아메리카노", "4500"));
        productInfo.put("병원", Arrays.asList("타이레놀", "3000"));
        productInfo.put("교통", Arrays.asList("택시비", "12000"));
        productInfo.put("여가", Arrays.asList("영화관", "15000"));
        productInfo.put("기타", Arrays.asList("카카오톡 이모티콘", "2000"));
        productInfo.put("간편식", Arrays.asList("라면4봉", "4000"));
        productInfo.put("커피/차", Arrays.asList("맥심커피", "3000"));
        productInfo.put("과자/간식", Arrays.asList("꼬북칩", "1500"));
        productInfo.put("제과/잼", Arrays.asList("소금빵", "3000"));
        productInfo.put("완구", Arrays.asList("액체괴물", "500"));
        productInfo.put("잡화/명품", Arrays.asList("향수", "50000"));
        productInfo.put("문구/도서", Arrays.asList("3색 볼펜", "3500"));
        productInfo.put("담배", Arrays.asList("담배", "4500"));
    }
    public IfbuyListResponse getIfbuyList(Long memberId){

        Member member = memberRepository.findById(memberId).get();

        MostBuyItem mostBuyItem = transactionRepository.findMostBuyItem(memberId);

        // 은행 정보, 잔액 가져오기
        // TODO [하영] : 은행 정보 가져오기
        
        // 샀다 치고 객체 가져오기
        List<IfbuyItem> list =ifBuyQRepository.findByMember(member.getId());
        List<String> info = productInfo.get(mostBuyItem.getName());
        IfbuyListResponse ifbuyListResponse = IfbuyListResponse.builder()
                .mostBuy(info.get(0))
                .mostBuyPrice(Long.parseLong(info.get(1)))
                .itemList(list).build();

        return ifbuyListResponse;
    }

    public void addIfBuy(Long memberId, IfbuyRegisterRequest request, MultipartFile file){
        try{
            Member member = memberRepository.findById(memberId).get();
            UploadFile imgFile = fileStore.storeFile(file);

            IfBuyEntity entity = IfBuyEntity.builder().member(member).name(request.getName())
                    .price(Long.parseLong(request.getPrice())).uploadFileName(imgFile.getUploadFileName())
                    .storeFileName(imgFile.getStoreFileName()).build();

            ifBuyRepository.save(entity);
            // TODO [하영] : 은행에서 출금하기
            // TODO [하영] : 티끌머니 잔액 추가
            

        }catch (IOException e){
            throw new RuntimeException(e);

        }
    }
}
