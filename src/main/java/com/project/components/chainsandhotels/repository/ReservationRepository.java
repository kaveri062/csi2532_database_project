package com.project.components.chainsandhotels.repository;


import com.project.components.chainsandhotels.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByHotelId(Integer hotelId);
    List<Reservation> findByHotelIdAndClientId(Integer employeeHotelId, String clientId);

}
