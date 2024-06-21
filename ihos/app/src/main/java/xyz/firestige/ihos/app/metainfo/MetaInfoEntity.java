package xyz.firestige.ihos.app.metainfo;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class MetaInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String contentType;
    private String url;
    private String thumbnailUrl;
    private Instant createAt;
    private Instant expireAt;
    @ElementCollection
    private List<String> tags = new ArrayList<>();
}
