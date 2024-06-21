package xyz.firestige.ihos.app.metainfo;

import com.github.javafaker.Faker;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.Instant;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class MetaInfoRepositoryTest {

    @Autowired
    private MetaInfoRepository repo;

    @Test
    void findById() {
        Faker faker = new Faker();
        MetaInfoEntity info = new MetaInfoEntity();
        info.setName(faker.name().nameWithMiddle());
        info.setCreateAt(Instant.now());
        long id = repo.save(info).getId();
        assertNotNull(repo.findById(id));
    }
}