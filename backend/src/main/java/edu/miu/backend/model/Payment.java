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
public class Payment {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false)
    private string paymentID;

    @NotNull
    @Column(nullable = false)
    private date date;

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