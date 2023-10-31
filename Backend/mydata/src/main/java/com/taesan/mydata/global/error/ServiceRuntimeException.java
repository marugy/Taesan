package com.taesan.mydata.global.error;

public abstract class ServiceRuntimeException extends RuntimeException {

    private String messageKey;

    private String detailKey;

    private Object[] params;

    public ServiceRuntimeException(String messageKey, String detailKey, Object[] params) {
        this.messageKey = messageKey;
        this.detailKey = detailKey;
        this.params = params;
    }

    public String getMessageKey() {
        return messageKey;
    }

    public String getDetailKey() {
        return detailKey;
    }

    public Object[] getParams() {
        return params;
    }

}