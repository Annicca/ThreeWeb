package ru.konkurs.demo.dto;

import org.springframework.web.multipart.MultipartFile;

public class ImageDTO {
    private MultipartFile img;

    public MultipartFile getImg() {
        return img;
    }

    public void setImg(MultipartFile img) {
        this.img = img;
    }
}
