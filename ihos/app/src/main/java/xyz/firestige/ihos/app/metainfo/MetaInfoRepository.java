package xyz.firestige.ihos.app.metainfo;

import org.springframework.data.repository.CrudRepository;

interface MetaInfoRepository extends CrudRepository<MetaInfoEntity, Long> {
    MetaInfoEntity findById(long id);
}
