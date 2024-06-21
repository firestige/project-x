package xyz.firestige.ihos.app;

import org.junit.jupiter.api.Test;
import org.springframework.util.MimeType;

import java.io.IOException;
import java.util.Random;
import java.util.concurrent.CompletableFuture;

public class FutureTest {
    @Test
    void test() {
        warp().thenApply(aBoolean -> "get normal result:" + aBoolean.toString())
                .exceptionally(e -> "catch an exception: " + e.getMessage() +", inner msg is: " + e.getCause().getCause().getMessage())
                .thenAccept(System.out::println).join();
    }

    @Test
    void test2() {
        MimeType type = MimeType.valueOf("video/mp4");
        System.out.println(type);
    }

    private CompletableFuture<Boolean> futureWithException() throws IOException {
        CompletableFuture<Boolean> future = new CompletableFuture<>();
        if (new Random().nextBoolean()) {
            future.complete(true);
            return future;
        } else {
            throw new IOException("ops, something went wrong");
        }

    }

    private CompletableFuture<Boolean> warp() {
        CompletableFuture<Boolean> warped = new CompletableFuture<>();
        try {
            return futureWithException();
        } catch (Exception e) {
            warped.completeExceptionally(new RuntimeException("an warped error", e));
        }
        return warped;
    }
}
