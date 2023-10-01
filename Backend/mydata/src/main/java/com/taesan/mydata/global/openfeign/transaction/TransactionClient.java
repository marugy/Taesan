package com.taesan.mydata.global.openfeign.transaction;

import com.taesan.mydata.global.api.ApiResult;
import com.taesan.mydata.global.config.OpenFeignConfig;
import com.taesan.mydata.global.openfeign.transaction.dto.request.CardHistoryList;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@FeignClient(name = "transaction", url = "${api.base-uri.taesan}/transactions", configuration = OpenFeignConfig.class)
public interface TransactionClient {

    @PostMapping("/transaction/{card_id}")
    ApiResult<Void> saveNewTransaction(
            @RequestBody CardHistoryList history);
}
