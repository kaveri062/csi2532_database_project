package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Reservation;

import java.util.List;

public interface ReservationService {
    List<Reservation> getReservationsForEmployee(String employeeId);
    List<Reservation> getClientReservationsForEmployee(String employeeId, String clientId);
    Reservation createReservation(Reservation reservation);
}
