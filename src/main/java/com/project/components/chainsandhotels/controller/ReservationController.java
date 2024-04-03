package com.project.components.chainsandhotels.controller;

import com.project.components.chainsandhotels.model.Reservation;
import com.project.components.chainsandhotels.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

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
