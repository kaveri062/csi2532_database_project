package com.project.components.chainsandhotels.controller;

import com.project.components.chainsandhotels.model.Hotel;
import com.project.components.chainsandhotels.model.HotelChain;
import com.project.components.chainsandhotels.repository.HotelChainRepository;
import com.project.components.chainsandhotels.repository.HotelRepository;
import com.project.components.chainsandhotels.service.HotelChainService;
import com.project.components.chainsandhotels.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hotelchains")
public class HotelChainController {

    private HotelChainService hotelChainService;
    private HotelService hotelService;

    @Autowired
    public HotelChainController(HotelChainService hotelChainService, HotelService hotelService) {
        this.hotelChainService = hotelChainService;
        this.hotelService = hotelService;
    }

    @GetMapping("/getHotelChainsAndHotels")
    public ResponseEntity<Map<String, List<Map<String, Object>>>> getHotelChainsAndHotels() {
        List<HotelChain> hotelChains = hotelChainService.getAllHotelChains();
        Map<String, List<Map<String, Object>>> result = new LinkedHashMap<>();


        for (HotelChain hotelChain : hotelChains) {
            Map<String, Object> chainData = new LinkedHashMap<>();
            chainData.put("chainName", hotelChain.getChainName());
            chainData.put("headquarters", hotelChain.getHeadquartersAddress());
            chainData.put("chainContactEmail", hotelChain.getContactEmail());
            chainData.put("chainContactPhone", hotelChain.getContactPhone());
            chainData.put("chainNumberOfHotels", hotelChain.getNumberOfHotels());

            List<Hotel> hotels = hotelService.findByAllHotelNamesHotelChain(hotelChain);
            List<String> hotelNames = hotels.stream().map(Hotel::getName).collect(Collectors.toList());
            chainData.put("hotels", hotelNames);

            result.put(hotelChain.getChainName(), Collections.singletonList(chainData));
        }

        return ResponseEntity.ok(result);
    }

}
