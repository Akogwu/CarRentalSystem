package edu.miu.backend.services;

import edu.miu.backend.dto.UserDTO;
import edu.miu.backend.exception.CustomException;
import edu.miu.backend.model.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User findById(Long userId);
    User findByUsername(String username);
    User createUser(User user) throws CustomException;
    User registerUser(UserDTO userDTO) throws CustomException;
}
