package gallery.image.gallery_api.Repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
// import gallery.image.gallery_api.Entity.Type;

import gallery.image.gallery_api.Entity.imageEntity;

@Repository
public interface imageRepository extends JpaRepository<imageEntity, Long> {
    // Define custom query methods here if needed

    // @Query(value = "SELECT * FROM image_entity WHERE type IN (:types)",
    // nativeQuery = true)
    // List<imageEntity> findByType(@Param("type") List<imageEntity.Type> types);

    @Query(value = "SELECT * FROM image_entity WHERE type = :type", nativeQuery = true)
    List<imageEntity> findByType(@Param("type") String type, PageRequest pageable);

}
