package com.ts.taesan.domain.transaction.api.dto.request;

import com.ts.taesan.domain.transaction.service.dto.response.Receipt;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReceiptRequest {
    String shopName;
    LocalDateTime date;
    List<Receipt> productList;
}
