package edu.miu.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
<<<<<<< HEAD

@SpringBootApplication
public class Application {

=======
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class Application {
>>>>>>> 5f2575d0d5855ce6887dc8dfc552127d0f9e177a
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

<<<<<<< HEAD
=======
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }
>>>>>>> 5f2575d0d5855ce6887dc8dfc552127d0f9e177a
}
