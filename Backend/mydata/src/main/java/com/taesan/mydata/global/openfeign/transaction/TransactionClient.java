package com.taesan.mydata.global.openfeign.transaction;

import com.taesan.mydata.global.config.OpenFeignConfig;
import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "transaction", url = "${api.base-uri.taesan}/transactions", configuration = OpenFeignConfig.class)
public interface TransactionClient {

//    @PostMapping("/load/transaction")
//    ApiResult<Void> registerAuth(
//            @RequestBody Map<String, String> body);
}
