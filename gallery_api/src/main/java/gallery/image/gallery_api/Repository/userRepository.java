package gallery.image.gallery_api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gallery.image.gallery_api.Entity.userEntity;

@Repository
public interface userRepository extends JpaRepository<userEntity, Long> {
    // @Query(value = "SELECT * FROM userEntity WHERE username = :username",
    // nativeQuery = true)
    userEntity findByUsername(String username);
}
