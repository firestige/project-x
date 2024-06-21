package xyz.firestige.ihos.app.service;

import org.springframework.util.MimeType;

import java.io.InputStream;
import java.util.List;

public interface ResourceService {
    String uploadFile(InputStream inputStream, String fileName, MimeType contentType, List<String> tags);
    Boolean isTaskSuccess(String taskId);
}
