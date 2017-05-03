package com.jjjbernales.repository;

import com.jjjbernales.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long>{

    @EntityGraph(attributePaths = "roles")
    Optional<User> findOneWithRolesByUsername(String username);

    Optional<User> findOneByUsername(String username);
}
