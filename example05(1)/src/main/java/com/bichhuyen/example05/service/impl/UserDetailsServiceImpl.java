package com.bichhuyen.example05.service.impl;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.bichhuyen.example05.config.UserInfoConfig;
import com.bichhuyen.example05.entity.User;
import com.bichhuyen.example05.exceptions.ResourceNotFoundException;
import com.bichhuyen.example05.repository.UserRepo;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  @Autowired
  private UserRepo userRepo;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<User> user = userRepo.findByEmail(username);
    return user.map(UserInfoConfig::new).orElseThrow(() -> new ResourceNotFoundException("User", "email", username));
  }
}
