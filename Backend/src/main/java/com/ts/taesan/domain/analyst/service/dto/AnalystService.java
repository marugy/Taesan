package com.ts.taesan.domain.analyst.service.dto;

import com.ts.taesan.domain.analyst.req.AnalystClient;
import com.ts.taesan.domain.analyst.req.dto.ReceiptOcrDto;
import com.ts.taesan.domain.analyst.service.dto.response.*;
import com.ts.taesan.domain.transaction.repository.TransactionQRepository;
import com.ts.taesan.global.util.FileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class AnalystService {
    private final TransactionQRepository transactionQRepository;
    private final AnalystClient analystClient;
    private final FileUtil fileUtil;

    public PlaceAnalystResponse placeAnlystResponse(Long cardId, String year, String month){
        YearMonth yearMonth = YearMonth.of(Integer.parseInt(year), Integer.parseInt(month));
        List<Info> list = transactionQRepository.findTransactionAnal(cardId, yearMonth.atDay(1), yearMonth.atEndOfMonth());
        return new PlaceAnalystResponse(year, month, list);
    }

    public ReceiptAnalystResponse receiptAnalystResponse(Long cardId, String year, String month){
        YearMonth yearMonth = YearMonth.of(Integer.parseInt(year), Integer.parseInt(month));
        List<Info> list = transactionQRepository.findReceiptAnal(cardId, yearMonth.atDay(1), yearMonth.atEndOfMonth());
        return new ReceiptAnalystResponse(year, month, list);
    }

    public OCRReceiptList naverReceipt(MultipartFile file){
        log.info(file.getOriginalFilename());
        String uuid = UUID.randomUUID().toString();
        String message = "{\"version\": \"V2\",\"requestId\": \""+uuid+"\",\"timestamp\": "+System.currentTimeMillis()+",\"images\": [{ \"format\": \""
                + fileUtil.extractExt(file.getOriginalFilename()) +"\", \"name\": " +
                "\""+file.getOriginalFilename()+"\" }]}";
        ReceiptOcrDto ocrDto = analystClient.analystReceipt("eFVnakhNTlVpcEpkRWFjbVJ4WmpQUWdhbEtQbnRjS0I=", message, file).get();

        List<OCRReceiptDTO> list = new ArrayList<>();
        for(ReceiptOcrDto.Item one : ocrDto.getImages().get(0).getReceipt().getResult().getSubResults().get(0).getItems()){
            String name = one.getName().getFormatted().getValue();
            Long sumPrice = Long.parseLong(one.getPrice().getPrice().getFormatted().getValue());
            Long unitPrice = Long.parseLong(one.getPrice().getUnitPrice().getFormatted().getValue());
            log.info(name);
            list.add(new OCRReceiptDTO(name, sumPrice, unitPrice));
        }
        Long totalPrice = Long.parseLong(ocrDto.getImages().get(0).getReceipt().getResult().getTotalPrice().getPrice().getFormatted().getValue());
        OCRReceiptList result = new OCRReceiptList(list,totalPrice);

        return result;
    }
}
