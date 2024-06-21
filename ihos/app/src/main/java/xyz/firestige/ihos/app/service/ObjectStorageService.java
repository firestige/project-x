package xyz.firestige.ihos.app.service;

import xyz.firestige.ihos.app.metainfo.MetaInfo;

import java.io.InputStream;
import java.util.concurrent.CompletableFuture;

public interface ObjectStorageService {

    /**
     * store file to oss with stream
     *
     * @param in input stream
     * @return false-store failed, true-store success
     */
    CompletableFuture<Boolean> store(MetaInfo info, InputStream in);

    CompletableFuture<String> getTemporaryUrl(MetaInfo info);
}
