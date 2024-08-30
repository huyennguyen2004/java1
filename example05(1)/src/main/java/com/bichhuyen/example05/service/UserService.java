package com.bichhuyen.example05.service;

import com.bichhuyen.example05.payloads.UserDTO;
import com.bichhuyen.example05.payloads.UserResponse;

public interface UserService {
  UserDTO registerUser(UserDTO userDTO);

  UserDTO getUserByEmail(String email);

  UserResponse getAllUsers(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

  UserDTO getUserById(Long userId);

  UserDTO updateUser(Long userId, UserDTO userDTO);

  String deleteUser(Long userId);
}