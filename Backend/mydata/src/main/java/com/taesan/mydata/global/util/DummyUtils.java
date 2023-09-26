package com.taesan.mydata.global.util;

import com.taesan.mydata.global.enumerate.CardCompany;
import com.taesan.mydata.global.enumerate.CardName;
import com.taesan.mydata.global.enumerate.CardRate;
import com.taesan.mydata.global.enumerate.Shop;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Component
public class DummyUtils {

    Random random = new Random();

    /**
     * 14자리의 랜덤 계좌번호 리턴
     *
     * @return 랜덤 계좌번호
     */
    public String getAccountNum() {
        StringBuilder accountNum = new StringBuilder();

        accountNum.append(random.nextInt(9) + 1);
        for(int i=0; i<13; i++) {
            accountNum.append(random.nextInt(10));
        }
        return accountNum.toString();
    }

    /**
     * 3년 이내의 랜덤 날짜 리턴
     *
     * @return 랜덤 날짜
     */
    public Date getDate() {
        return new Date(new Date().getTime() - (long) (random.nextDouble() * 94672800000L));
    }

    /**
     * 1000 ~ 50000 사이의 금액 리턴
     *
     * @return 랜덤 결제 금액
     */
    public long getPayAmt() {
        long min = 1000;   // 최소 값
        long max = 50000; // 최대 값
        long range = max - min + 1;

        long randomLong = min + (long)(random.nextDouble() * range);

        return ((randomLong + 99) / 100) * 100;
    }

    /**
     * 19자리의 랜덤 카드번호 리턴
     *
     * @return 랜덤 카드번호
     */
    public String getCardNum() {
        StringBuilder cardNum = new StringBuilder();

        cardNum.append(random.nextInt(9) + 1);
        for(int i=0; i<18; i++) {
            cardNum.append(random.nextInt(10));
        }

        return cardNum.toString();
    }

    /**
     * 랜덤 카드 이름 생성
     *
     * @return 랜덤 카드 이름
     */
    public String getCardName() {
        StringBuilder cardName = new StringBuilder();
        cardName.append(CardCompany.valueOf(random.nextInt(5)))
                .append(' ')
                .append(CardName.valueOf(random.nextInt(5)))
                .append(' ')
                .append(CardRate.valueOf(random.nextInt(5)));

        return cardName.append(" 카드").toString();
    }

    /**
     * "0X" 형태의 타입을 랜덤으로 생성
     *
     * @param max X의 최댓값
     * @return 타입
     */
    public String getType(int max) {
        return "0" + (random.nextInt(max) + 1);
    }

    /**
     * 주어진 확률로 true를 반환한다.
     *
     * @param probability 확률
     * @return 확률에 선정되었는지 여부
     */
    public boolean drawLots(int probability) {
        return random.nextInt(100) < probability;
    }

    /**
     * 가맹점을 랜덤으로 리턴한다.
     *
     * @return 가맹점 Enum 클래스
     */
    public Shop getShop() {
        return Shop.valueOf(random.nextInt(10));
    }

}
