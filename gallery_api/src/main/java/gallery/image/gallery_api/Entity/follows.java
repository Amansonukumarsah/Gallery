package gallery.image.gallery_api.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class follows {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // The user who is following
    @ManyToOne
    @JoinColumn(name = "follower_id")
    private userEntity follower;

    // The user being followed
    @ManyToOne
    @JoinColumn(name = "followed_id")
    private userEntity followed;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public userEntity getFollower() {
        return follower;
    }

    public void setFollower(userEntity follower) {
        this.follower = follower;
    }

    public userEntity getFollowed() {
        return followed;
    }

    public void setFollowed(userEntity followed) {
        this.followed = followed;
    }

    // Getters and setters

}