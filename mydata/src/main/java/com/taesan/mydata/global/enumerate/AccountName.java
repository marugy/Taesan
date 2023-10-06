package com.taesan.mydata.global.enumerate;

public enum AccountName {
    청년도약, 법인, 적금, 외환, ISA, EMA;

    public static AccountName valueOf(int value) {
        switch (value) {
            case 0: return 청년도약;
            case 1: return 법인;
            case 2: return 적금;
            case 3: return 외환;
            case 4: return ISA;
            case 5: return EMA;
            default: throw new IllegalArgumentException("유효하지 않은 값: " + value);
        }
    }
}

