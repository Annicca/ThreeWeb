package ru.konkurs.demo.services;

import jakarta.security.auth.message.AuthException;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import ru.konkurs.demo.dto.AuthenticationRequestDTO;
import ru.konkurs.demo.dto.AuthenticationResponseDTO;
import ru.konkurs.demo.dto.ImageDTO;
import ru.konkurs.demo.enums.Role;
import ru.konkurs.demo.models.Profile;
import ru.konkurs.demo.repositories.ProfileRepository;
import ru.konkurs.demo.security.auth.JwtService;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Optional;

@Service
public class ProfileService {
    
    @Autowired
    private ProfileRepository profileRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    JwtService jwtService;

    @Autowired
    private FileService fileServise;

    @Autowired
    private AuthenticationManager authenticationManager;

    public Profile getByLogin(String login) {
        return profileRepository.getByLogin(login);
    }

    public Optional<Profile> getById(Integer id) {
        return profileRepository.findById(id);
    }

    public AuthenticationResponseDTO register(Profile profile) {

        profile.setPassword(passwordEncoder.encode(profile.getPassword()));
        profile.setRole(Role.CLIENT);

        Profile registeredProfile = profileRepository.save(profile);
        registeredProfile = getByLogin(registeredProfile.getLogin());
        String jwtToken = jwtService.generateToken(registeredProfile.getLogin());
        return new AuthenticationResponseDTO(registeredProfile, jwtToken);
    }

    public AuthenticationResponseDTO authenticate(AuthenticationRequestDTO auth) throws AuthException {
        try{

            String login = auth.getLogin();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login, auth.getPassword()));

            Profile profile = getByLogin(login);
            if(profile == null){
                throw  new UsernameNotFoundException("Пользователь с логином" + login + " не найден");
            }

            String jwtToken = jwtService.generateToken(profile.getLogin());
            return new AuthenticationResponseDTO(profile, jwtToken);

        }catch(AuthenticationException e){
            throw new AuthException("Неверный логин или пароль");
        }
    }

    public void saveAvatar(Integer profileId, ImageDTO img) throws IOException {
        Optional<Profile> optProfile = profileRepository.findById(profileId);
        if(optProfile.isPresent()) {
            Profile profile = optProfile.get();
            profile.setImg(fileServise.saveImg(img.getImg()));
            profileRepository.save(profile);
        }
    }

    public FileSystemResource downloadAvatar(Integer profileId) throws MalformedURLException {
        Optional<Profile> optProfile = profileRepository.findById(profileId);
        FileSystemResource resource = null;
        if(optProfile.isPresent()) {
            Profile profile = optProfile.get();
            resource = fileServise.downloadFile(profile.getImg());
        }

        return resource;
    }

}
