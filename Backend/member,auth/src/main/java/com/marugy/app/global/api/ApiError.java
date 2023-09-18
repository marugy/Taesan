package com.marugy.app.global.api;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.http.HttpStatus;

public class ApiError {

    //에러 메시지
    private final String message;
    //에러 상태
    private final int status;

    //에러 클래스와 상태
    ApiError(Throwable throwable, HttpStatus status) {
        this(throwable.getMessage(), status);
    }
    //에러 메시지와 상태
    ApiError(String message, HttpStatus status) {
        this.message = message;
        this.status = status.value();
    }

    public String getMessage() {
        return message;
    }

    public int getStatus() {
        return status;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE)
                .append("message", message)
                .append("status", status)
                .toString();
    }

}