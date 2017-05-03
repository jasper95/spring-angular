package com.jjjbernales.web;


import com.jjjbernales.domain.User;
import com.jjjbernales.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserResource {

    private final UserRepository userRepository;


    public UserResource(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(Pageable pageable){
        Page<User> page = userRepository.findAll(pageable);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }

    @GetMapping("/users/{username}")
    public ResponseEntity<User> getUser(@PathVariable String username){
        return userRepository.findOneByUsername(username)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
