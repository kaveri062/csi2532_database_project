package com.project.components.chainsandhotels.repository;

import com.project.components.chainsandhotels.model.Hotel;
import com.project.components.chainsandhotels.model.HotelChain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    @Query("SELECT h FROM Hotel h WHERE h.hotelChain = :hotelChain")
    List<Hotel> findByAllHotelNamesHotelChain(HotelChain hotelChain);

}
