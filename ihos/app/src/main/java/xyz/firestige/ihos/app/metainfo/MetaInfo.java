package xyz.firestige.ihos.app.metainfo;

import java.time.Instant;
import java.util.List;

public record MetaInfo(Long id, String name, String contentType, String url, String thumbnailUrl, Instant createAt, Instant expireAt, List<String> tags) {
}
