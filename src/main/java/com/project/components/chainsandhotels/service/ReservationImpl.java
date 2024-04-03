package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Employee;
import com.project.components.chainsandhotels.model.Reservation;
import com.project.components.chainsandhotels.repository.EmployeeRepository;
import com.project.components.chainsandhotels.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;


@Service
public class ReservationImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Reservation> getReservationsForEmployee(String employeeId) {
        // Fetch the hotel ID associated with the employee ID
        Integer hotelId = employeeRepository.findHotelIdByEmployeeId(employeeId);

        // Use the hotel ID to fetch reservations for the hotel
        if (hotelId != null) {
            return reservationRepository.findByHotelId(hotelId);
        } else {
            // Handle case where employee ID is not found or associated with a hotel
            return Collections.emptyList();
        }
    }

    @Override
    public List<Reservation> getClientReservationsForEmployee(String employeeId, String clientId) {
        // Fetch the employee's hotelId using employeeId
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        Integer employeeHotelId = employee.getHotelId();

        // Fetch reservations for the client in the hotel of the employee
        return reservationRepository.findByHotelIdAndClientId(employeeHotelId, clientId);
    }

    @Override
    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

}
