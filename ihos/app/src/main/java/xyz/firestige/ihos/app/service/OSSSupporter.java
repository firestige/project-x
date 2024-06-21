package xyz.firestige.ihos.app.service;

import xyz.firestige.ihos.app.metainfo.MetaInfo;

import java.io.InputStream;
import java.util.concurrent.CompletableFuture;

public abstract class OSSSupporter implements ObjectStorageService {

    @Override
    public CompletableFuture<Boolean> store(MetaInfo info, InputStream in) {
        return ensureWritable(info)
                .thenCompose(aVoid -> store0(info, in))
                .thenApply(aVoid -> true)
                .exceptionally(this::handleThrowable);
    }

    @Override
    public CompletableFuture<String> getTemporaryUrl(MetaInfo info) {
        return new CompletableFuture<>();
    }

    private boolean handleThrowable(Throwable throwable) {
        handleThrowable0(throwable);
        return false;
    }

    protected abstract CompletableFuture<Void> ensureWritable(MetaInfo info);

    protected abstract CompletableFuture<Void> store0(MetaInfo info, InputStream in);

    protected abstract void handleThrowable0(Throwable throwable);
}
