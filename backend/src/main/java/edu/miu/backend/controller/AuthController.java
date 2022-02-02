package edu.miu.backend.controller;

import edu.miu.backend.dto.AuthDTO;
import edu.miu.backend.jwt.JWTUtil;
import edu.miu.backend.model.User;
import edu.miu.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final JWTUtil jwtUtil;
    private UserService userService;
    private final UserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthController(
            JWTUtil jwtUtil,
            UserService userService,
            UserDetailsService userDetailsService,
            AuthenticationManager authenticationManager
    ) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.userDetailsService = userDetailsService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody AuthDTO authReq) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authReq.getUsername(),
                            authReq.getPassword()
                    )
            );
        } catch (BadCredentialsException ex) {
            throw new Exception("Incorrect login credentials", ex);
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(authReq.getUsername());
        String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new HashMap<String, Object>(){{
            put("token", jwt);
        }});
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(
            @Valid @RequestBody User user
    ) throws Exception {
        return ResponseEntity.ok(userService.createUser(user));
    }
}
