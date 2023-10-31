package com.taesan.mydata.global.enumerate;

public enum CardRate {
    실버, 골드, 플래티넘, 다이아몬드, 마스터, 블랙;

    public static CardRate valueOf(int value) {
        switch (value) {
            case 0: return 실버;
            case 1: return 골드;
            case 2: return 플래티넘;
            case 3: return 다이아몬드;
            case 4: return 마스터;
            case 5: return 블랙;
            default: throw new IllegalArgumentException("유효하지 않은 값: " + value);
        }
    }
}

