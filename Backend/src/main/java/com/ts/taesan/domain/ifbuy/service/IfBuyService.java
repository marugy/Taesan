package com.ts.taesan.domain.ifbuy.service;

import com.sun.xml.bind.v2.TODO;
import com.ts.taesan.domain.ifbuy.api.dto.request.IfbuyRegisterRequest;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyItem;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyListResponse;
import com.ts.taesan.domain.ifbuy.entity.IfBuyEntity;
import com.ts.taesan.domain.ifbuy.repository.IfBuyQRepository;
import com.ts.taesan.domain.ifbuy.repository.IfBuyRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.global.entity.UploadFile;
import com.ts.taesan.global.util.FileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class IfBuyService {

    private final IfBuyQRepository ifBuyQRepository;
    private final IfBuyRepository ifBuyRepository;
    private final MemberRepository memberRepository;
    private final FileUtil fileStore;
    public IfbuyListResponse getIfbuyList(Long memberId){

        Member member = memberRepository.findById(memberId).get();
        // 가장 많이 하는 소비 가져오기 + 금액
        // TODO [하영] : 가장 많이하는 소비 가져오기 
        // 은행 정보, 잔액 가져오기
        // TODO [하영] : 은행 정보 가져오기
        
        // 샀다 치고 객체 가져오기
        List<IfbuyItem> list =ifBuyQRepository.findByMember(member.getId());
        IfbuyListResponse ifbuyListResponse = IfbuyListResponse.builder().itemList(list).build();

        return ifbuyListResponse;
    }

    public void addIfBuy(Long memberId, IfbuyRegisterRequest request, MultipartFile file){
        try{
            Member member = memberRepository.findById(memberId).get();
            UploadFile imgFile = fileStore.storeFile(file);

            IfBuyEntity entity = IfBuyEntity.builder().member(member).name(request.getName())
                    .price(Long.parseLong(request.getPrice())).uploadFileName(imgFile.getUploadFileName())
                    .storeFileName(imgFile.getStoreFileName()).build();

            ifBuyRepository.save(entity);
            // TODO [하영] : 은행에서 출금하기
            // TODO [하영] : 티끌머니 잔액 추가
            

        }catch (IOException e){
            throw new RuntimeException(e);

        }
    }
}
