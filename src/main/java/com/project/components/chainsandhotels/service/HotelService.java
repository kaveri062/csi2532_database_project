package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Hotel;
import com.project.components.chainsandhotels.model.HotelChain;

import java.util.List;

public interface HotelService {
    List<Hotel> getAllHotels();
    Hotel getHotelById(Integer id);
    List<Hotel> findByAllHotelNamesHotelChain(HotelChain hotelChain);
}
