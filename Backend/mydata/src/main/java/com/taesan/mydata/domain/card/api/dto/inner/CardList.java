package com.taesan.mydata.domain.card.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CardList {

        @JsonProperty("card_id")
        private Long cardId;

        @JsonProperty("company")
        private String company;

        @JsonProperty("card_num")
        private String cardNum;

        @JsonProperty("is_consent")
        private Boolean isConsent;

        @JsonProperty("card_name")
        private String cardName;

        @JsonProperty("card_member")
        private Integer cardMember;

        @JsonProperty("card_type")
        private String cardType;

    }