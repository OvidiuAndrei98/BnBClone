package com.bnbclone.sso_auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public String index(Model model,
                                       @RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient,
                                       @AuthenticationPrincipal OAuth2User oauth2User,
                        OAuth2AuthenticationToken authentication
                        ) {
        model.addAttribute("userName", oauth2User.getName());
        model.addAttribute("clientName", authorizedClient.getClientRegistration().getClientName());
        model.addAttribute("userAttributes", oauth2User.getAttributes());
        String idToken = ((DefaultOidcUser) authentication.getPrincipal()).getIdToken().getTokenValue();
        return "redirect:http://localhost:3000/?token=" + idToken;

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/sso/auth")
    public String auth() {
        return "redirect:http://localhost:8080/oauth2/authorization/1";
    }
}
