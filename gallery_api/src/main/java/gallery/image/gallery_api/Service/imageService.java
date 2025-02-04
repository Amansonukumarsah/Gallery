package gallery.image.gallery_api.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import gallery.image.gallery_api.Entity.imageEntity;
import gallery.image.gallery_api.Entity.userEntity;
import gallery.image.gallery_api.Repository.imageRepository;
import gallery.image.gallery_api.Repository.userRepository;

@Service
public class imageService {
    @Autowired
    private userRepository userRepository;

    @Autowired
    private imageRepository imageRepository;

    public List<imageEntity> getImageByType(String type, PageRequest pageable) {
        List<imageEntity> activeUserImage = imageRepository.findByType(type, pageable);
        if (type.equalsIgnoreCase("public")) {
            return activeUserImage;
        }
        List<imageEntity> filterImage = getFilterImage(activeUserImage);
        return filterImage;
    }

    public List<imageEntity> getAllImages() {
        List<imageEntity> activeUserImage = imageRepository.findByAll();
        List<imageEntity> filterImage = getFilterImage(activeUserImage);
        return filterImage;
    }

    public Optional<imageEntity> getImageById(Long id) {
        return imageRepository.findById(id);
    }

    public imageEntity saveImage(imageEntity imageEntity) {
        return imageRepository.save(imageEntity);
    }

    public imageEntity updateImage(Long id, imageEntity imageEntity) {
        if (imageRepository.existsById(id)) {
            imageEntity.setId(id);
            return imageRepository.save(imageEntity);
        }
        return null;
    }

    public void deleteImage(Long id) {
        imageRepository.deleteById(id);
    }

    // it send the image as per the user
    public List<imageEntity> getFilterImage(List<imageEntity> activeUserImage) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userName = authentication.getName();
        userEntity user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<imageEntity> filterImage = activeUserImage.stream()
                .filter(image -> image.getUser().equals(user))
                .collect(Collectors.toList());
        return filterImage;
    }
}
