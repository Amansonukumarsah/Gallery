package gallery.image.gallery_api.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
import gallery.image.gallery_api.Service.imageService;

@RestController
@RequestMapping("/api/images")
public class imageController {

    @Autowired
    private imageService imageService;

    private userEntity user;

    @GetMapping("/getImage")
    public List<imageEntity> getAllImages(
            @RequestParam("type") String type,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "limit", defaultValue = "10") int limit) {
        PageRequest pageable = PageRequest.of(page, limit);
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

    @PostMapping(value = "/postImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<imageEntity> uploadImage(
            @RequestPart("description") String description,
            @RequestPart("picClickBy") String picClickBy,
            @RequestParam("type") Type type,
            @RequestPart("image") MultipartFile file) throws IOException {
        // set the image details
        imageEntity imageEntity = new imageEntity();
        imageEntity.setDescription(description);
        imageEntity.setPicClickBy(picClickBy);
        imageEntity.setType(type);
        imageEntity.setImage(file.getBytes());

        // set the user for each image
        // user.getImageEntity().forEach(image -> image.setUser(user));
        // System.out.println("..............user............." + user);
        // imageEntity.setUser(user);
        // System.out.println(".............imag......" + imageEntity.getUser());
        // System.out.println(".............imag......" + imageEntity.getType());
        // final
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

    // set the user
}
