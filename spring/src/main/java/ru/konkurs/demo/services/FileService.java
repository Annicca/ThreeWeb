package ru.konkurs.demo.services;

import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.UUID;

@Service
public class FileService {

    private Path resourcesPath = Paths.get("src", "main", "resources");

    private Path imgPath = Paths.get("src", "main", "resources", "img");

    private  static  String[] imgFormat = new String[]{".jpeg", ".png", ".jpg", ".webp"};

    public String saveImg(MultipartFile file) throws IOException,  MaxUploadSizeExceededException {
        if (file.isEmpty()) {
            throw new IOException("Файл пуст, пожалуйста, загрузите другой или повторите попытку");
        }
        try{
            if( !(Arrays.asList(imgFormat).contains(FileService.getFileFormat(file.getOriginalFilename()).toLowerCase()))){
                throw new IOException("Неверный формат файла, загрузите другой файл");
            }
            File uploadDir = new File(resourcesPath.toFile().getAbsoluteFile() + "/img");
            if(!uploadDir.exists()){
                uploadDir.mkdir();
            }

            String uuidFile = UUID.randomUUID().toString();
            String resultName = uuidFile + "_" + file.getOriginalFilename();
            String pathName = resourcesPath.toFile().getAbsoluteFile() + "/img/" + resultName;
            file.transferTo(new File(pathName));

            return resultName;

        }catch(IOException e){
            throw new IOException("Произошла ошибка при загрузке файла");
        }catch(MaxUploadSizeExceededException e) {
            throw new IOException("Произошла ошибка при загрузке файла");
        }
    }

    public UrlResource downloadFile( String fileName) throws MalformedURLException {
        Path filePath = imgPath.resolve(fileName).normalize();
        UrlResource resource = null;
        try {
            resource = new UrlResource(filePath.toUri());
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        return resource;
    }

    public static String getFileFormat(String format) {
        int index = format.lastIndexOf('.');
        return index == -1? null : format.substring(index);
    }
}