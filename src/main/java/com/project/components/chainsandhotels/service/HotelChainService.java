package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.HotelChain;

import java.util.List;

public interface HotelChainService {
    List<HotelChain> getAllHotelChains();
    HotelChain getHotelChainById(Integer id);
}
