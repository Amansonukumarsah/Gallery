package gallery.image.gallery_api.Service;

import gallery.image.gallery_api.Entity.imageEntity;
import gallery.image.gallery_api.Entity.imageEntity.Type;

public class imageDTO { // PascalCase class name
    private Long id;
    private String description;
    private String picClickBy;
    private Type type;
    private byte[] image;
    private String userName;

    // Constructor
    public imageDTO(imageEntity imageEntity) {
        this.id = imageEntity.getId();
        this.description = imageEntity.getDescription();
        this.image = imageEntity.getImage();
        this.picClickBy = imageEntity.getPicClickBy();
        this.type = imageEntity.getType();
        this.userName = imageEntity.getUser() != null ? imageEntity.getUser().getName() : "Anonymous"; // Default
                                                                                                       // "Anonymous"
    }

    // Getter methods
    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public byte[] getImage() {
        return image;
    }

    public String getPicClickBy() {
        return picClickBy;
    }

    public Type getType() {
        return type;
    }

    public String getUserName() {
        return userName;
    }
}
