package edu.miu.backend.model;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

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
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate pickupDate;

    @NotNull
    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;

    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ReservationStatus status;

    @ManyToOne
    @JoinColumn(name = "carId")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "customerId")
    private User customer;
}
