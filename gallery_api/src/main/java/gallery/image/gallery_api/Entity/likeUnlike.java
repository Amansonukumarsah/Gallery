package gallery.image.gallery_api.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
public class likeUnlike {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private boolean liked;
  private boolean unliked;

  @ManyToOne
  @JoinColumn(name = "user_id", nullable = false)
  private userEntity userEntity;

  @ManyToOne
  @JoinColumn(name = "image_id", nullable = false)
  private imageEntity imageEntity;

  // Getters and Setters
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public boolean isLiked() {
    return liked;
  }

  public void setLiked(boolean liked) {
    this.liked = liked;
  }

  public boolean isUnliked() {
    return unliked;
  }

  public void setUnliked(boolean unliked) {
    this.unliked = unliked;
  }

  public userEntity getUserEntity() {
    return userEntity;
  }

  public void setUserEntity(userEntity userEntity) {
    this.userEntity = userEntity;
  }

  public imageEntity getImageEntity() {
    return imageEntity;
  }

  public void setImageEntity(imageEntity imageEntity) {
    this.imageEntity = imageEntity;
  }
}
