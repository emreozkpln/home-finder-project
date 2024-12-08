package dev.buddly.home_finder.service;

import dev.buddly.home_finder.dto.request.AuthenticationRequest;
import dev.buddly.home_finder.dto.response.AuthenticationResponse;
import dev.buddly.home_finder.dto.response.RegistrationRequest;
import dev.buddly.home_finder.email.EmailService;
import dev.buddly.home_finder.email.EmailTemplateName;
import dev.buddly.home_finder.entity.Token;
import dev.buddly.home_finder.entity.User;
import dev.buddly.home_finder.exception.OperationNotPermittedException;
import dev.buddly.home_finder.repo.TokenRepository;
import dev.buddly.home_finder.repo.UserRepository;
import dev.buddly.home_finder.security.JwtService;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;
    private final JwtService jwtService;

    @Value("${application.mailing.frontend.activation-url}")
    private String activationUrl;

    public void register(RegistrationRequest request) throws MessagingException {
        var existingUser = userRepository.findByEmail(request.email());
        if(existingUser.isPresent()){
            throw new OperationNotPermittedException("User already exists");
        }
        var user = User.builder()
                .firstname(request.firstname())
                .lastname(request.lastname())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .accountLocked(false)
                .enabled(false)
                .build();

        userRepository.save(user);
        sendValidationEmail(user);
    }

    private void sendValidationEmail(User user) throws MessagingException {
        var newToken = generateAndSaveToken(user);

        emailService.sendEmail(
                user.getEmail(),
                user.fullName(),
                EmailTemplateName.ACTIVATE_ACCOUNT,
                activationUrl,
                newToken,
                "Account activation"
        );

    }

    private String generateAndSaveToken(User user) {
        String generateToken = generateActivationCode(6);

        var token = Token.builder()
                .token(generateToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build();
        tokenRepository.save(token);
        return generateToken;
    }

    private String generateActivationCode(int length) {
        String characters = "0123456789";
        StringBuilder codeBuilder = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for(int i=0 ;i<length; i++){
            int randomIndex = secureRandom.nextInt(characters.length());
            codeBuilder.append(characters.charAt(randomIndex));
        }
        return codeBuilder.toString();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var user = userRepository.findByEmail(request.email())
                .orElseThrow();

        if(!user.isEnabled()){
            throw new OperationNotPermittedException("User not enabled");
        }

        var claims = new HashMap<String, Object>();
        claims.put("fullname",user.fullName());
        var token = jwtService.generateToken(claims,user);
        return new AuthenticationResponse(token);
    }

    public void activationAccount(String token) throws MessagingException {
        Token key = tokenRepository.findByToken(token)
                .orElseThrow(() -> new EntityNotFoundException("Token not found"));

        if(LocalDateTime.now().isAfter(key.getExpiresAt())){
            sendValidationEmail(key.getUser());
            throw new OperationNotPermittedException("Token expired");
        }

        var user = userRepository.findById(key.getUser().getId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        user.setEnabled(true);
        userRepository.save(user);
        key.setValidatedAt(LocalDateTime.now());
        tokenRepository.save(key);
    }
}
