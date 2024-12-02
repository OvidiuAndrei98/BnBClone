package com.bnbclone.sso_auth.controller;

import com.bnbclone.sso_auth.model.House;
import com.bnbclone.sso_auth.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
public class HouseController {

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    private final HouseService houseService;

    @Autowired
    public HouseController(HouseService houseService) {
        this.houseService = houseService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/houses")
    public ResponseEntity<List<House>> getHouses() throws IOException, ExecutionException, InterruptedException {
        return ResponseEntity.ok(houseService.getHouses());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/houses/add")
    public ResponseEntity<String> addHouse(@RequestBody House house) throws IOException, ExecutionException, InterruptedException {
        houseService.addHousing(house);
        return ResponseEntity.ok("House added");
    }
}
