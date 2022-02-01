package edu.miu.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Setter @Getter
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false)
    private String street;

    @NotNull
    @Column(nullable = false)
    private String city;

    @NotNull
    @Column(nullable = false)
    private String zip;
}