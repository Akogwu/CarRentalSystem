package edu.miu.backend.services;

import edu.miu.backend.dto.ReservationDTO;
import edu.miu.backend.exception.CustomException;
import edu.miu.backend.model.Reservation;

import java.time.LocalDate;
import java.util.List;

public interface ReservationService {
    Reservation findById(Long reservationId);
    List<Reservation> findAllByCarId(Long carId);
    List<Reservation> findAllByUserId(Long userId);
    Reservation confirm(Long reservationId) throws CustomException;
    Reservation cancel(Long reservationId) throws CustomException;
    Reservation create(ReservationDTO reservation) throws CustomException;
    Reservation makerInProgress(Long reservationId) throws CustomException;
    Reservation findByPickupDateAndUserId(LocalDate pickupDate, Long userId);
    Reservation makeReservationCompleted(Long reservationId) throws CustomException;
    Reservation update(Long reservationId, ReservationDTO reservation) throws CustomException;
}
