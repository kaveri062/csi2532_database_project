package com.project.components.chainsandhotels.controller;

import com.project.components.chainsandhotels.model.Client;
import com.project.components.chainsandhotels.model.Reservation;
import com.project.components.chainsandhotels.model.ReservationDTO;
import com.project.components.chainsandhotels.repository.EmployeeRepository;
import com.project.components.chainsandhotels.service.ClientService;
import com.project.components.chainsandhotels.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ClientService clientService;

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/allReservations")
    public ResponseEntity<List<Reservation>> getReservationsForEmployee(@RequestBody Map<String, String> requestBody) {
        String employeeId = requestBody.get("employeeId");
        System.out.println(employeeId);
        List<Reservation> reservations = reservationService.getReservationsForEmployee(employeeId);
        return ResponseEntity.ok(reservations);
    }

    @PostMapping("/clientReservations")
    public ResponseEntity<List<Reservation>> getClientReservationsForEmployee(@RequestBody ClientReservationRequest request) {
        List<Reservation> reservations = reservationService.getClientReservationsForEmployee(request.getEmployeeId(), request.getClientId());
        return ResponseEntity.ok(reservations);
    }

    @PostMapping("/saveReservations")
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation request) {
        String clientId = request.getClientId();
        Optional<Client> clientOptional = clientService.getClientBySsn(clientId);

        if (!clientOptional.isPresent()) {
            // Client does not exist
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        Reservation reservation = reservationService.createReservation(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(reservation);
    }


    @PostMapping("/saveEmployeeReservations")
    public ResponseEntity<Reservation> createClientReservation(@RequestBody ReservationDTO request) {
        String clientId = request.getClientId();
        Optional<Client> clientOptional = clientService.getClientBySsn(clientId);

        if (!clientOptional.isPresent() || request.getRoomId()==null) {
            // Client does not exist
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        Integer hotelId = employeeRepository.findHotelIdByEmployeeId(request.getEmployeeId());
        Reservation reservation = new Reservation();
        reservation.setId(request.getId());
        reservation.setClientId(request.getClientId());
        reservation.setHotelId(hotelId);
        reservation.setRoomId(request.getRoomId());
        reservation.setCheckIn(request.getCheckIn());
        reservation.setCheckOut(request.getCheckOut());
        reservation.setStatus(request.getStatus());
        reservation.setPaid(request.isPaid());
        Reservation newReservation = reservationService.createReservation(reservation);
        return ResponseEntity.status(HttpStatus.CREATED).body(newReservation);
    }


    @PostMapping("/checkInReservation")
    public ResponseEntity<String> checkInReservation(@RequestBody Map<String, Integer> requestBody) {
        // Check if the reservation exists
        Integer reservationId= requestBody.get("reservation_id");
        Optional<Reservation> reservationOptional = reservationService.getReservationById(reservationId);
        if (!reservationOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Reservation not found");
        }

        // Update the reservation status to "CheckedIn"
        Reservation reservation = reservationOptional.get();
        reservation.setStatus("CheckedIn");
        reservationService.updateReservation(reservation);

        return ResponseEntity.ok("Reservation checked in successfully");
    }


    public static class ClientReservationRequest {

        private String employeeId;
        private String clientId;

        // Getters and setters
        public String getEmployeeId() {
            return employeeId;
        }

        public void setEmployeeId(String employeeId) {
            this.employeeId = employeeId;
        }

        public String getClientId() {
            return clientId;
        }

        public void setClientId(String clientId) {
            this.clientId = clientId;
        }
    }

}
