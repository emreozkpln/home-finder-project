package dev.buddly.home_finder.controller;

import dev.buddly.home_finder.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("image")
public class ImageController {

    private final ImageService imageService;

    @PostMapping(path = "/upload/{id}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<String> uploadFile(@PathVariable Integer id, @RequestParam("file") MultipartFile file) throws IOException {
        return ResponseEntity.ok(imageService.uploadFileAndSaveListing(id,file.getOriginalFilename(), file));
    }
}
