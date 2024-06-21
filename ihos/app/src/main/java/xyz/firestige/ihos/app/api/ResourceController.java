package xyz.firestige.ihos.app.api;

import xyz.firestige.ihos.app.service.ResourceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.Objects;

@Slf4j
@RestController
public class ResourceController {
    @Autowired
    private ResourceService service;

    @PostMapping("/resource")
    public ResponseEntity<String> upload(@RequestParam MultipartFile file, @RequestParam Map<String, String> params) {
        try {
            log.info(params.toString());
            String fileName = Objects.requireNonNull(params.get("fileName"), "fileName is required");
            String fileType = Objects.requireNonNull(params.get("fileType"), "fileType is required");
            String tags = Objects.requireNonNull(params.get("tags"), "tags is required");
            String taskId = service.uploadFile(file.getInputStream(), fileName, MimeType.valueOf(fileType), Arrays.asList(tags.split(",")));
            return ResponseEntity.ok(taskId);
        } catch (NullPointerException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("upload failed");
        }
    }
}
