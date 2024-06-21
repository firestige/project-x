package xyz.firestige.ihos.app.service.minio;

import xyz.firestige.ihos.app.metainfo.MetaInfo;
import xyz.firestige.ihos.app.service.OSSSupporter;
import xyz.firestige.ihos.app.service.ObjectStorageService;

import org.springframework.stereotype.Service;

import io.minio.BucketExistsArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioAsyncClient;
import io.minio.PutObjectArgs;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.XmlParserException;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.concurrent.CompletableFuture;

@Service
public class MinioAdapter extends OSSSupporter implements ObjectStorageService {
    private static final long MAX_FILE_SIZE = 10485760;
    private final MinioAsyncClient client;

    public MinioAdapter() {
        this.client = MinioAsyncClient.builder()
                .endpoint("https://minio.ihos0test.svc.cluster.local:443")
                .credentials("ZGETaDialqmEyQaA", "84qF95E7VsqV6boQszKsOppKXcUYqHvR")
                .build();
    }

    @Override
    protected CompletableFuture<Void> ensureWritable(MetaInfo info) {
        return isBucketExist(getBucketName(info))
                .thenCompose(isExist -> isExist
                        ? CompletableFuture.completedFuture(Void.TYPE.cast(isExist))
                        : createBucket(getBucketName(info)));
    }

    private CompletableFuture<Boolean> isBucketExist(String bucketName) {
        CompletableFuture<Boolean> future = new CompletableFuture<>();
        try {
            return client.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
        } catch (InsufficientDataException | InternalException | InvalidKeyException | IOException |
                 NoSuchAlgorithmException | XmlParserException e) {
            future.completeExceptionally(e);
        }
        return future;
    }

    private CompletableFuture<Void> createBucket(String bucketName) {
        CompletableFuture<Void> future = new CompletableFuture<>();
        try {
            return client.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
        } catch (InsufficientDataException | IOException | NoSuchAlgorithmException | InvalidKeyException |
                 XmlParserException | InternalException e) {
            future.completeExceptionally(e);
        }
        return future;
    }

    @Override
    protected CompletableFuture<Void> store0(MetaInfo info, InputStream in) {
        CompletableFuture<Void> future = new CompletableFuture<>();
        try {
            return client.putObject(
                    PutObjectArgs.builder()
                            .bucket(getBucketName(info))
                            .object(info.name()).stream(in, -1, MAX_FILE_SIZE)
                            .contentType(info.contentType())
                            .build())
                    .thenApply(Void.TYPE::cast);
        } catch (InsufficientDataException | InternalException | InvalidKeyException | IOException |
                 NoSuchAlgorithmException | XmlParserException e) {
            future.completeExceptionally(e);
        }
        return future;
    }

    @Override
    protected void handleThrowable0(Throwable throwable) {

    }

    private String getBucketName(MetaInfo info) {
        return info.contentType();
    }
}
