package ru.konkurs.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.konkurs.demo.dto.ImageDTO;
import ru.konkurs.demo.services.ProfileService;

import java.io.IOException;
import java.net.MalformedURLException;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileService service;

    @PatchMapping("/{id}/avatar")
    @ResponseBody
    public void SaveAvatar(@PathVariable Integer id, @ModelAttribute ImageDTO img) throws IOException {
        service.saveAvatar(id, img);
    }

    @GetMapping("/{id}/avatar/download")
    public ResponseEntity<FileSystemResource> download(@PathVariable Integer id) throws MalformedURLException {
        FileSystemResource resource = service.downloadAvatar(id);
        if(!resource.exists()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}
