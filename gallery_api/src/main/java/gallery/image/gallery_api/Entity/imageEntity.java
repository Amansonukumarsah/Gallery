package gallery.image.gallery_api.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "image_Entity")
public class imageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, name = "Description")
    private String description;

    public enum Type {
        Personal,
        Public,

    }

    @Column(length = 255, name = "type")
    @Enumerated(EnumType.STRING)
    private Type type;

    @Column(length = 255)
    private String picClickBy;

    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;

    // constructor
    // imageEntity(Type type) {
    // this.type = type;
    // }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPicClickBy() {
        return picClickBy;
    }

    public void setPicClickBy(String picClickBy) {
        this.picClickBy = picClickBy;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Type getType() {
        return this.type;
    }

}
