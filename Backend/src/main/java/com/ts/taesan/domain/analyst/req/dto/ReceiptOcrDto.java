package com.ts.taesan.domain.analyst.req.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

import static lombok.AccessLevel.PUBLIC;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = PUBLIC)
public class ReceiptOcrDto {
    List<Images> images;
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class Images{
        private ReceiptN receipt;
    }
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class ReceiptN{
        private Result result;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class Result{
        private List<SubResults> subResults;
        private TotalPrice totalPrice;

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class SubResults{
        private List<Item> items;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class Item{
        private Name name;
        private Count count;
        private PriceInfo price;
    }
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class Name{
        private String text;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class Count{
        private String text;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class PriceInfo{
        private Price price;
        private UnitPrice unitPrice;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class Price{
        private Formatted formatted;

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class UnitPrice{
        private Formatted formatted;

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class Formatted{
        private String value;

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = PUBLIC)
    public static class TotalPrice{
        private Price price;

    }
}
