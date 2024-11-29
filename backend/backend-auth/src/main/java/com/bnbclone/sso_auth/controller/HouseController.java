package com.bnbclone.sso_auth.controller;

import com.bnbclone.sso_auth.model.House;
import com.bnbclone.sso_auth.service.HouseService;
import com.google.api.client.util.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.time.Instant;
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
    @GetMapping("/houses/add")
    public ResponseEntity<String> addHouse() throws IOException, ExecutionException, InterruptedException {
        House house = new House("Test", "TEST", "test", "Buc", 120, 4, "1", "test date"  , "test description");
        houseService.addHousing(house);
        return ResponseEntity.ok("House added");
    }
}
