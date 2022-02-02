package edu.miu.backend.seed;

import edu.miu.backend.model.Role;
import edu.miu.backend.model.User;
import edu.miu.backend.services.UserService;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Component
@Transactional(propagation = Propagation.REQUIRED)
public class  SeedData {
    private final UserService userService;

    public SeedData(UserService userService) {
        this.userService = userService;
    }

    private void loadUsers() {
        List<Role> usernameRoles = new ArrayList<>() {{
            add(Role.EMPLOYEE);
            add(Role.CUSTOMER);
        }};

        usernameRoles.forEach(role -> {
            User user = new User();
            user.setRole(role);
            user.setPassword("1234");
            user.setUsername(role.toString().toLowerCase());
            user.setLastName(role.toString().toUpperCase());
            user.setFirstName(role.toString().toUpperCase());
            user.setEmail(role.toString().toLowerCase() + "@mail.com");
            userService.createUser(user);
        });
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        if (userService.findAll().size() == 0) {
            loadUsers();
        }
    }
}
