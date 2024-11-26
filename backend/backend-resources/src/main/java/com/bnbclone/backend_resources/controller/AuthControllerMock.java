package com.bnbclone.backend_resources.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;

@Controller
public class AuthControllerMock {
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/sso/auth")
    public ResponseEntity<Model> auth(Model model) {
        LocalDateTime expirationTime = LocalDateTime.now().plusMinutes(30);
        model.addAttribute("loggedIn", true);
        model.addAttribute("expiration", expirationTime);
        return ResponseEntity.ok(model);
    }
}
