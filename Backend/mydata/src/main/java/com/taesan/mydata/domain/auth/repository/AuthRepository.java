package com.taesan.mydata.domain.auth.repository;

import com.taesan.mydata.domain.auth.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepository extends JpaRepository<Auth, Long> {

    boolean existsById(long id);

}
