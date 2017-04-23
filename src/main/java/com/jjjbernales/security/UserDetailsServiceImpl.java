package com.jjjbernales.security;

import com.jjjbernales.domain.User;
import com.jjjbernales.domain.enums.UserStatus;
import com.jjjbernales.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userFromDatabase = userRepository.findOneWithRolesByUsername(username);
        return userFromDatabase.map(user -> {
            if (!user.getStatus().equals(UserStatus.ACTIVE)) {
                throw new UserNotActivatedException("User " + username + " was not activated");
            }
            List<GrantedAuthority> grantedAuthorities = user.getRoles().stream()
                    .map(authority -> new SimpleGrantedAuthority(authority.getRoleName()))
                    .collect(Collectors.toList());
            return new org.springframework.security.core.userdetails.User(username,
                    user.getPassword(),
                    grantedAuthorities);
        }).orElseThrow(() -> new UsernameNotFoundException("User " + username + " was not found in the " +
                "database"));
    }
}
