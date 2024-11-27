package dev.buddly.home_finder.controller;

import dev.buddly.home_finder.dto.request.AuthenticationRequest;
import dev.buddly.home_finder.dto.response.AuthenticationResponse;
import dev.buddly.home_finder.dto.response.RegistrationRequest;
import dev.buddly.home_finder.handler.ResponseHandler;
import dev.buddly.home_finder.service.AuthenticationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("auth")
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<Void> register(
           @RequestBody @Valid RegistrationRequest request
    ) throws MessagingException {
        service.register(request);
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody @Valid AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/activate")
    public ResponseEntity<Object> activateAccount(
            @RequestParam String token
    ) throws MessagingException {
        service.activationAccount(token);
        return ResponseHandler.handle("Activated Account", HttpStatus.OK,token);
    }
}
