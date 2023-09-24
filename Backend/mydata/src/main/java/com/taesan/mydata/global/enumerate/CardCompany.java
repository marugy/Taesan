package com.taesan.mydata.global.enumerate;

import lombok.Getter;

public enum CardCompany {
    신한, 국민, 우리, 하나, 토스, 카카오;

    public static CardCompany valueOf(int value) {
        switch (value) {
            case 0: return 신한;
            case 1: return 국민;
            case 2: return 우리;
            case 3: return 하나;
            case 4: return 토스;
            case 5: return 카카오;
            default: throw new IllegalArgumentException("유효하지 않은 값: " + value);
        }
    }
}

