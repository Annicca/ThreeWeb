package ru.konkurs.demo.controllers;

import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.konkurs.demo.dto.ImageDTO;
import ru.konkurs.demo.models.Profile;
import ru.konkurs.demo.services.ProfileService;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Optional;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileService service;


    @GetMapping("/{id}")
    @ResponseBody
    public Optional<Profile> GetProfile(@PathVariable Integer id){

        return service.getById(id);
    }

    @PatchMapping("/{id}/avatar")
    @ResponseBody
    public void SaveAvatar(@PathVariable Integer id, @ModelAttribute ImageDTO img) throws IOException {
        service.saveAvatar(id, img);
    }

    @GetMapping("/{id}/avatar/download")
    public ResponseEntity<UrlResource> download(@PathVariable Integer id) throws MalformedURLException {
        UrlResource resource = service.downloadAvatar(id);
        System.out.println(resource.getFilename());
        if(!resource.exists()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}
