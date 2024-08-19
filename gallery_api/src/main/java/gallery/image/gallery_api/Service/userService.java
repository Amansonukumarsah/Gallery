package gallery.image.gallery_api.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import gallery.image.gallery_api.Entity.userEntity;
import gallery.image.gallery_api.Repository.userRepository;

@Service
public class userService {

    @Autowired
    private userRepository userRepository;

    public ResponseEntity<String> RegisterUser(userEntity registerUser) {
        userEntity user = new userEntity();
        user.setName(registerUser.getName());
        user.setEmail(registerUser.getEmail());
        user.setPassword(registerUser.getPassword());
        user.setConfirmPassword(registerUser.getConfirmPassword());
        userRepository.save(user);
        return new ResponseEntity<>("Registration is Successfully",
                HttpStatus.ACCEPTED);
    }
}
