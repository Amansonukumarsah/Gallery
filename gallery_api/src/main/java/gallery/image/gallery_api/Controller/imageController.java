package gallery.image.gallery_api.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import gallery.image.gallery_api.Entity.imageEntity;
import gallery.image.gallery_api.Entity.imageEntity.Type;
import gallery.image.gallery_api.Entity.userEntity;
import gallery.image.gallery_api.Repository.userRepository;
import gallery.image.gallery_api.Service.imageService;

@RestController
@RequestMapping("/api/images")
public class imageController {

    @Autowired
    private imageService imageService;

    @Autowired
    private userRepository userRepository;

    @GetMapping("/getImage")
    public List<imageEntity> getAllImages(
            @RequestParam("type") String type,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "limit", defaultValue = "10") int limit) {
        PageRequest pageable = PageRequest.of(page, limit);
        // System.out.println(type);
        if (type.equalsIgnoreCase("All")) {
            return imageService.getAllImages();
        }
        if (type != null) {
            return imageService.getImageByType(type, pageable);
        } else {
            return imageService.getAllImages();
        }
    }

    @GetMapping("/getImage/{id}")
    public ResponseEntity<imageEntity> getImageById(@PathVariable Long id) {
        return imageService.getImageById(id)
                .map(image -> new ResponseEntity<>(image, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Add the image
    @PostMapping(value = "/postImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<imageEntity> uploadImage(
            @RequestPart("description") String description,
            @RequestPart("picClickBy") String picClickBy,
            @RequestParam("type") Type type,
            @RequestPart("image") MultipartFile file) throws IOException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        String userName = authentication.getName();
        userEntity user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new RuntimeException("User not found"));
        imageEntity imageEntity = new imageEntity();
        imageEntity.setDescription(description);
        imageEntity.setPicClickBy(picClickBy);
        imageEntity.setType(type);
        imageEntity.setImage(file.getBytes());
        // Attach the logged-in user to the image
        imageEntity.setUser(user);
        // Save image
        imageEntity savedImage = imageService.saveImage(imageEntity);
        return new ResponseEntity<>(savedImage, HttpStatus.CREATED);
    }

    @PutMapping("/putImage/{id}")
    public ResponseEntity<imageEntity> updateImage(@PathVariable Long id,
            @RequestParam("description") String description,
            @RequestParam("picClickBy") String picClickBy,
            @RequestParam("image") MultipartFile file) throws IOException {
        imageEntity imageEntity = new imageEntity();
        imageEntity.setDescription(description);
        imageEntity.setPicClickBy(picClickBy);
        imageEntity.setImage(file.getBytes());

        imageEntity updatedImage = imageService.updateImage(id, imageEntity);
        if (updatedImage != null) {
            return new ResponseEntity<>(updatedImage, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delImage/{id}")
    public ResponseEntity<Void> deleteImage(@PathVariable Long id) {
        imageService.deleteImage(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
