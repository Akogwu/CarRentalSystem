package edu.miu.backend.services.impl;

import edu.miu.backend.exception.CustomException;
import edu.miu.backend.model.User;
import edu.miu.backend.repository.UserRepository;
import edu.miu.backend.services.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long userId) {
        return userRepository.findById(userId)
                .orElse(null);
    }

    public User createUser(User user) throws CustomException {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new CustomException("Username is taken");
        }
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new CustomException("Email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return user;
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User loggedUser = userRepository.findByUsername(username);
        if (loggedUser == null) {
            throw new UsernameNotFoundException("Invalid login credentials");
        }
        return new org.springframework.security.core.userdetails.User(
                loggedUser.getUsername(),
                loggedUser.getPassword(),
                loggedUser.getAuthorities()
        );
    }
}
