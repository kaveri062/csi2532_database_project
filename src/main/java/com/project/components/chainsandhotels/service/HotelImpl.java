package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Hotel;
import com.project.components.chainsandhotels.model.HotelChain;
import com.project.components.chainsandhotels.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelImpl implements HotelService{
    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @Override
    public Hotel getHotelById(Integer id) {
        return hotelRepository.findById(id).orElse(null);
    }

    @Override
    public List<Hotel> findByAllHotelNamesHotelChain(HotelChain hotelChain) {
        return hotelRepository.findByAllHotelNamesHotelChain(hotelChain);
    }
}
