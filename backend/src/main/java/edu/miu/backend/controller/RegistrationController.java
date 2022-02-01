package edu.miu.backend.controller;

import edu.miu.backend.model.UserStatus;
import edu.miu.backend.model.User;
import edu.miu.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class RegistrationController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/users/register")
    public UserStatus registerUser(@Valid @RequestBody User newUser) {
        List<User> users = userRepository.findAll();

        System.out.println("New user: " + newUser.toString());

        for (User user : users) {
            System.out.println("Registered user: " + newUser.toString());

            if (user.equals(newUser)) {
                System.out.println("User Already exists!");
                return UserStatus.USER_ALREADY_EXISTS;
            }
        }

        userRepository.save(newUser);
        return UserStatus.SUCCESS;
    }

    //    @PostMapping("/users/logout")
    //    public UserStatus logUserOut(@Valid @RequestBody User user) {
    //        List<User> users = userRepository.findAll();
    //
    //        for (User other : users) {
    //            if (other.equals(user)) {
    //                user.setLoggedIn(false);
    //                userRepository.save(user);
    //                return UserStatus.SUCCESS;
    //            }
    //        }
    //
    //        return UserStatus.FAILURE;
    //    }
    //
    //    @DeleteMapping("/users/all")
    //    public UserStatus deleteUsers() {
    //        userRepository.deleteAll();
    //        return UserStatus.SUCCESS;
    //    }

}
