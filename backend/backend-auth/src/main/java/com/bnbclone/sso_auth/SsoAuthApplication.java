package com.bnbclone.sso_auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SsoAuthApplication {

	public static void main(String[] args) {
		SpringApplication.run(SsoAuthApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/sso/auth").allowedOrigins("http://localhost:3000");
				registry.addMapping("/*").allowedOrigins("https://dev-8vs2lvif2du2k6a6.us.auth0.com");
			}
		};
	}

}
