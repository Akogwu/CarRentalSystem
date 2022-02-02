package edu.miu.backend.services;

import edu.miu.backend.exception.CustomException;
import edu.miu.backend.model.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User findById(Long userId);
    User createUser(User user) throws CustomException;
}
