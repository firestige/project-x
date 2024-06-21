package xyz.firestige.ihos.app.service;

import xyz.firestige.ihos.app.metainfo.MetaInfo;
import xyz.firestige.ihos.app.metainfo.MetaInfos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.MimeType;

import lombok.extern.slf4j.Slf4j;

import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
public class ResourceServiceImpl implements ResourceService {
    @Autowired
    private ObjectStorageService service;
    private final Map<String, Boolean> registry = new ConcurrentHashMap<>();

    @Override
    public String uploadFile(InputStream inputStream, String fileName, MimeType contentType, List<String> tags) {
        MetaInfo info = MetaInfos.builder().name(fileName).contentType(contentType.getType()).tags(tags).build();
        String id = buildId(info);
        log.info("Uploading file {}", fileName);
        service.store(info, inputStream).thenAccept(isDone -> registry.put(id, isDone)).join();
        log.info("File uploaded {}, id: {}", fileName, id);
        return id;
    }

    @Override
    public Boolean isTaskSuccess(String taskId) {
        return registry.get(taskId);
    }

    private String buildId(MetaInfo info) {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
