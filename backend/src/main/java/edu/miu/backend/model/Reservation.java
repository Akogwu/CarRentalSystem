package edu.miu.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Setter @Getter
@NoArgsConstructor

public class Reservation {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false)
    private LocalDate pickupDate;

    @NotNull
    @Column(nullable = false)
    private LocalDate returndate;


    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;
}