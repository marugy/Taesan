package com.ts.taesan.domain.ifbuy.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyItem;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import static com.ts.taesan.domain.ifbuy.entity.QIfBuyEntity.ifBuyEntity;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class IfBuyQRepository {

    private final JPAQueryFactory queryFactory;

    public List<IfbuyItem> findByMember(Long memberId){
        return queryFactory.select(Projections.fields(IfbuyItem.class,
                        ifBuyEntity.id, ifBuyEntity.name, ifBuyEntity.storeFileName.as("img"),
                        ifBuyEntity.price))
                .from(ifBuyEntity).where(ifBuyEntity.member.id.eq(memberId)).fetch();
    }
}
