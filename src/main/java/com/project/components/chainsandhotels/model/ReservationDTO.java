package com.project.components.chainsandhotels.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.sql.Date;

public class ReservationDTO {

        private Integer id;

        private String clientId;

        private String employeeId;

        private Integer roomId;

        private Date checkIn;

        private Date checkOut;

        private String status;

        private boolean paid;

        public ReservationDTO() {
        }



        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getClientId() {
            return clientId;
        }

        public void setClientId(String clientId) {
            this.clientId = clientId;
        }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public Integer getRoomId() {
            return roomId;
        }

        public void setRoomId(Integer roomId) {
            this.roomId = roomId;
        }

        public Date getCheckIn() {
            return checkIn;
        }

        public void setCheckIn(Date checkIn) {
            this.checkIn = checkIn;
        }

        public Date getCheckOut() {
            return checkOut;
        }

        public void setCheckOut(Date checkOut) {
            this.checkOut = checkOut;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }

        public boolean isPaid() {
            return paid;
        }

        public void setPaid(boolean paid) {
            this.paid = paid;
        }


}
