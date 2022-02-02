package edu.miu.backend.model;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.*;
import javax.validation.constraints.*;
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
    @NotBlank(message = "Password is required")
    private String password;

    @NotBlank(message = "First Name is required")
    @Size(min = 2, max = 20)
    private String firstName;

    @NotBlank(message = "Last Name is required")
    @Size(min = 2, max = 20)
    private String lastName;

    @Email
    @NotBlank
    private String email;

    @Column(unique = true)
    @NotBlank(message = "username is required")
    private String username;

    @Column(unique = true)
    private String driverLicenseNumber;

    @Column(unique = true)
    private String contactPhoneNumber;

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
        return Objects.hash(id, username, password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' + '}';
    }

    /**
     * Returns granted Role as set of SimpleGrantedAuthority for the user.
     * granted authorities are used by spring for authentication.
     *
     * @return Set<SimpleGrantedAuthority>
     */
    @JsonIgnore
    public Set<SimpleGrantedAuthority> getAuthorities() {
        Set<SimpleGrantedAuthority> permissions = new HashSet<>();
        permissions.add(new SimpleGrantedAuthority("ROLE_" + getRole().toString()));
        return permissions;
    }
}
