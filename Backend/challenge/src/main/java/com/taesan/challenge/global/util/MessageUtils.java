package com.taesan.challenge.global.util;

import org.springframework.context.support.MessageSourceAccessor;

public class MessageUtils {

    private static MessageSourceAccessor messageSourceAccessor;

    public static String getMessage(String key) {
        return messageSourceAccessor.getMessage(key);
    }

    public static String getMessage(String key, Object... params) {
        return messageSourceAccessor.getMessage(key, params);
    }

    public static void setMessageSourceAccessor(MessageSourceAccessor messageSourceAccessor) {
        MessageUtils.messageSourceAccessor = messageSourceAccessor;
    }

}
