package gallery.image.gallery_api.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import gallery.image.gallery_api.Component.JwtTokenProvider;
import gallery.image.gallery_api.Entity.userEntity;
import gallery.image.gallery_api.Repository.userRepository;

@Service
public class authService {

    @Autowired
    private userRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider JwtTokenProvider;

    @Autowired
    private securityService securityService;

    // Handle the Search functionality or send all the userDetails
    public List<userEntity> getAllUser() {
        return userRepository.findAll();
    }

    // Handle the Registration Of User
    public ResponseEntity<String> registerUser(userEntity registerUser) {
        // Check if the user already exists
        if (userRepository.findByUsername(registerUser.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
        }
        // Validate Confirm Password (Optional)
        if (!registerUser.getPassword().equals(registerUser.getConfirmPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Passwords do not match");
        }

        // Create new user entity
        userEntity user = new userEntity();
        user.setName(registerUser.getName());
        user.setUsername(registerUser.getUsername());
        user.setPassword(passwordEncoder.encode(registerUser.getPassword()));
        user.setConfirmPassword(passwordEncoder.encode(registerUser.getConfirmPassword()));
        // Save user in database
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Registration Successful");
    }

    // Handle the Login Of User
    public ResponseEntity<String> loginUser(String username, String password) {
        userEntity User = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        // .orElseThrow(()->new UsernameNotFoundException("User not found"));
        if (User == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }
        if (!passwordEncoder.matches(password, User.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
        String token = JwtTokenProvider.createToken(User.getUsername(), User.getRole());
        System.out.println("......................" + token);
        // securityService.setSecurityContextHolder(token);
        return ResponseEntity.ok(token);
    }
}
