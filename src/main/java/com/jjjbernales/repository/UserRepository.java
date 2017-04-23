package com.jjjbernales.repository;

import com.jjjbernales.domain.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<Long, User>{

    @EntityGraph(attributePaths = "roles")
    Optional<User> findOneWithRolesByUsername(String username);
}
