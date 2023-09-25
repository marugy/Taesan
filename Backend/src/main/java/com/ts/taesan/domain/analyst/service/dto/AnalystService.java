package com.ts.taesan.domain.analyst.service.dto;

import com.ts.taesan.domain.analyst.service.dto.response.Info;
import com.ts.taesan.domain.analyst.service.dto.response.PlaceAnalystResponse;
import com.ts.taesan.domain.analyst.service.dto.response.ReceiptAnalystResponse;
import com.ts.taesan.domain.transaction.repository.TransactionQRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.YearMonth;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class AnalystService {
    private final TransactionQRepository transactionQRepository;

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
}
