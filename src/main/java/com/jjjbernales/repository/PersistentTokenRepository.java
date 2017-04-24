package com.jjjbernales.repository;

import com.jjjbernales.domain.PersistentToken;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PersistentTokenRepository extends JpaRepository<PersistentToken, String> {

}
