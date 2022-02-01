package edu.miu.backend.model;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @JsonIgnore
    private String password;
    @NotEmpty(message = "First Name is required")
    @Size(min = 2, max = 20)
    private String firstName;
    @NotEmpty(message = "Last Name is required")
    @Size(min = 2, max = 20)
    private String lastName;
    @Email
    @NotEmpty
    private String email;
    @Column(unique = true)
    @NotEmpty(message = "username is required")
    private String username;

    private boolean loggedIn;

    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        return Objects.equals(username, user.username) &&
                Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password,
                loggedIn);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", loggedIn=" + loggedIn +
                '}';
    }

    /**
     * Returns granted Role as set of SimpleGrantedAuthority for the user.
     * granted authorities are used by spring for authentication.
     *
     * @return Set<SimpleGrantedAuthority>
     */
    public Set<SimpleGrantedAuthority> getAuthorities() {
        Set<SimpleGrantedAuthority> permissions = new HashSet<>();
        permissions.add(new SimpleGrantedAuthority("ROLE_" + getRole().toString()));
        return permissions;
    }
}
