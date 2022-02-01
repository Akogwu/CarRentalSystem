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
public class Payment {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false)
    private String paymentID;

    @NotNull
    @Column(nullable = false)
    private LocalDate date;

    @NotNull
    @Column(nullable = false)
    private double amount;

    @NotNull
    @Column(nullable = false)
    private boolean status;

    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;

}