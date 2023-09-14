package com.marugy.app.global.api;


import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.http.HttpStatus;

public class  ApiResponse<T> {
    private final boolean success;
    private final T response;
    private final ApiError error;
    private ApiResponse(boolean success, T response, ApiError error) {
        this.success = success;
        this.response = response;
        this.error = error;
    }

    //정상일떄
    public static <T> ApiResponse<T> OK(T response) {
        return new ApiResponse<>(true, response, null);
    }
    //예외 객체와 상태
    public static ApiResponse<?> ERROR(Throwable throwable, HttpStatus status) {
        return new ApiResponse<>(false, null, new ApiError(throwable, status));
    }
    //예외 메시지와 상태
    public static ApiResponse<?> ERROR(String errorMessage, HttpStatus status) {
        return new ApiResponse<>(false, null, new ApiError(errorMessage, status));
    }

    //성공 여부
    public boolean isSuccess() {
        return success;
    }
    //에러
    public ApiError getError() {
        return error;
    }
    //응답값
    public T getResponse() {
        return response;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE)
                .append("success", success)
                .append("response", response)
                .append("error", error)
                .toString();
    }

}