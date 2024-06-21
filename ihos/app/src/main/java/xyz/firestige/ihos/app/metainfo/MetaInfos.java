package xyz.firestige.ihos.app.metainfo;


import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public final class MetaInfos {

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private Long id;
        private String name;
        private String contentType;
        private String url;
        private String thumbnailUrl;
        private Instant createAt = Instant.now();
        private Instant expireAt = Instant.now();
        private final List<String> tags = new ArrayList<>();

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder contentType(String contentType) {
            this.contentType = contentType;
            return this;
        }

        public Builder url(String url) {
            this.url = url;
            return this;
        }

        public Builder thumbnailUrl(String thumbnailUrl) {
            this.thumbnailUrl = thumbnailUrl;
            return this;
        }

        public Builder createAt(Instant createAt) {
            this.createAt = createAt;
            return this;
        }

        public Builder expireAt(Instant expireAt) {
            this.expireAt = expireAt;
            return this;
        }

        public Builder tag(String tag) {
            this.tags.add(tag);
            return this;
        }

        public Builder tags(String... tags) {
            this.tags.addAll(Arrays.asList(tags));
            return this;
        }

        public Builder tags(List<String> tags) {
            this.tags.clear();
            this.tags.addAll(tags);
            return this;
        }

        public MetaInfo build() {
            Objects.requireNonNull(this.name, "name should not be null");
            Objects.requireNonNull(this.contentType, "contentType should not be null");
            return new MetaInfo(this.id, this.name, this.contentType, this.url, this.thumbnailUrl, this.createAt, this.expireAt, this.tags);
        }
    }
}
