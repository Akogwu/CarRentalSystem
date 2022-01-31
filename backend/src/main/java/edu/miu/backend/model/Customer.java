package edu.miu.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Setter @Getter
@NoArgsConstructor
public class Customer {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false)
    private string name;

    @NotNull
    @Column(nullable = false)
    private string email;

    @NotNull
    @Column(nullable = false)
    public Address address;


    @NotNull
    @Column(nullable = false)
    public string driverlicenseNo;


}
