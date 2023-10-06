package com.taesan.mydata.global.enumerate;

public enum CardName {
    희망, 기쁨, 사랑, 성공, 평화, 웃음;

    public static CardName valueOf(int value) {
        switch (value) {
            case 0: return 희망;
            case 1: return 기쁨;
            case 2: return 사랑;
            case 3: return 성공;
            case 4: return 평화;
            case 5: return 웃음;
            default: throw new IllegalArgumentException("유효하지 않은 값: " + value);
        }
    }
}

