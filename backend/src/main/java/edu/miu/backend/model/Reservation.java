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

public class Reservation {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false)
    private date pickupDate;

    @NotNull
    @Column(nullable = false)
    private date returndate;


    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;
}