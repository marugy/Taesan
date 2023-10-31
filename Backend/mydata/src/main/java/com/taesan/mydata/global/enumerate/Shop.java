package com.taesan.mydata.global.enumerate;

public enum Shop {
    GS25("123-456-7890"),
    롯데리아("456-789-0123"),
    홍루이젠("789-012-3456"),
    상계백병원("321-654-9870"),
    황솔촌("654-987-0123"),
    G마켓("987-012-3456"),
    쿠팡("210-543-8769"),
    무신사("543-876-2109"),
    엔젤리너스("876-210-5430"),
    투썸플레이스("109-876-5432");

    private final String registrationNumber;

    private Shop(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public static Shop valueOf(int value) {
        switch (value) {
            case 0: return GS25;
            case 1: return 롯데리아;
            case 2: return 홍루이젠;
            case 3: return 상계백병원;
            case 4: return 황솔촌;
            case 5: return G마켓;
            case 6: return 쿠팡;
            case 7: return 무신사;
            case 8: return 엔젤리너스;
            case 9: return 투썸플레이스;
            default: throw new IllegalArgumentException("유효하지 않은 값: " + value);
        }
    }
}

