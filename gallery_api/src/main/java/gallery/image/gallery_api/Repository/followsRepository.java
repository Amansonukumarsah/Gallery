package gallery.image.gallery_api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gallery.image.gallery_api.Entity.follows;

public interface followsRepository extends JpaRepository<follows, Integer> {

}
