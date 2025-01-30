package ru.konkurs.demo.controllers;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.konkurs.demo.dto.AuthenticationRequestDTO;
import ru.konkurs.demo.dto.AuthenticationResponseDTO;
import ru.konkurs.demo.models.Profile;
import ru.konkurs.demo.services.ProfileService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private ProfileService service;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDTO> login(@RequestBody AuthenticationRequestDTO auth) throws AuthException {

        return ResponseEntity.ok(service.authenticate(auth));

    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDTO> register(@RequestBody Profile profile){
        System.out.println(profile.getPassword());
        AuthenticationResponseDTO auth = service.register(profile);

        return ResponseEntity.ok(auth);
    }
}
