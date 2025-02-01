package gallery.image.gallery_api.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import gallery.image.gallery_api.Entity.imageEntity;
import gallery.image.gallery_api.Repository.imageRepository;

@Service
public class imageService {

    @Autowired
    private imageRepository imageRepository;

    public List<imageEntity> getImageByType(String type, PageRequest pageable) {
        // System.out.print("........getbyType.. ****.............."+);
        // imageEntity.Type enumType = imageEntity.Type.valueOf(type);
        // String[] typeArray = types.split(",");
        // List<imageEntity.Type> enumTypes = new ArrayList<>();
        // for (String type : typeArray) {
        // enumTypes.add(imageEntity.Type.valueOf(type.trim()));
        // }

        // // Call the repository method with the list of enum types
        // // return imageRepository.findByTypes(enumTypes);
        // return imageRepository.findByType(enumTypes);
        return imageRepository.findByType(type, pageable);
    }

    public List<imageEntity> getAllImages() {
        return imageRepository.findAll();
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
}
