package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.HotelChain;
import com.project.components.chainsandhotels.repository.HotelChainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelChainImpl implements HotelChainService{
    @Autowired
    private HotelChainRepository hotelChainRepository;

    @Override
    public List<HotelChain> getAllHotelChains() {
        return hotelChainRepository.findAll();
    }

    @Override
    public HotelChain getHotelChainById(Integer id) {
        return hotelChainRepository.findById(id).orElse(null);
    }
}
