package gallery.image.gallery_api.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class userEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name", length = 255)
    private String name;

    @Column(name = "Username", length = 255, unique = true, nullable = false)
    private String username;

    @Column(name = "Password", length = 255, nullable = false)
    private String password;

    @Column(name = "confirmPassword", length = 255, nullable = false)
    // @Transient if you want to donot store the value of that field then we can use
    // Transient
    private String confirmPassword;

    public enum Role {
        ROLE_USER,
        ROLE_ADMIN
    }

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "follower", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<follows> following;

    @OneToMany(mappedBy = "followed", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<follows> followers;
    // getterand setter

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    // @JsonIgnore // Prevent recursion
    @JsonManagedReference // 🔹 Forward reference (parent)
    private List<imageEntity> imageEntities;

    public void addImage(imageEntity imageEntity) {
        imageEntities.add(imageEntity);
        imageEntity.setUser(this);
    }

    public void removeImage(imageEntity imageEntity) {
        imageEntity.setUser(null);
        imageEntities.remove(imageEntity);
    }

    // getter and setter
    public Long getId() {
        return id;
    }

    public List<imageEntity> getImageEntity() {
        return imageEntities;
    }

    public void setImageEntity(List<imageEntity> imageEntities) {
        this.imageEntities = imageEntities;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<follows> getFollowing() {
        return following;
    }

    public void setFollowing(List<follows> following) {
        this.following = following;
    }

    public List<follows> getFollowers() {
        return followers;
    }

    public void setFollowers(List<follows> followers) {
        this.followers = followers;
    }

}
