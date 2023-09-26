package com.taesan.mydata.global.enumerate;

public enum BankName {
    신한은행, 국민은행, 우리은행, 하나은행, 토스뱅크, 카카오뱅크;

    public static BankName valueOf(int value) {
        switch (value) {
            case 0: return 신한은행;
            case 1: return 국민은행;
            case 2: return 우리은행;
            case 3: return 하나은행;
            case 4: return 토스뱅크;
            case 5: return 카카오뱅크;
            default: throw new IllegalArgumentException("유효하지 않은 값: " + value);
        }
    }
}

