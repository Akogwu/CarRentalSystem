package edu.miu.backend.services;

import edu.miu.backend.model.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User createUser(User user);
}
