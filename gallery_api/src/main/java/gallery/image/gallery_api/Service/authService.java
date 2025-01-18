package gallery.image.gallery_api.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import gallery.image.gallery_api.Component.JwtTokenProvider;
import gallery.image.gallery_api.Entity.userEntity;
import gallery.image.gallery_api.Repository.userRepository;
// import gallery.image.gallery_api.Configuration.SecurityConfig.passwordEncoder;

@Service
public class authService {

    @Autowired
    private userRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider JwtTokenProvider;

    // Handle the Search functionality or send all the userDetails
    public List<userEntity> getAllUser() {
        return userRepository.findAll();
    }

    // Handle the Registration Of User
    public ResponseEntity<String> RegisterUser(userEntity registerUser) {

        // Handle the unique username
        userEntity User = userRepository.findByUsername(registerUser.getUsername());
        if (User != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
        }

        // Store the data in databse

        userEntity user = new userEntity();
        user.setName(registerUser.getName());
        user.setUsername(registerUser.getUsername());
        user.setPassword(new BCryptPasswordEncoder().encode(registerUser.getPassword()));
        user.setConfirmPassword(new BCryptPasswordEncoder().encode(registerUser.getConfirmPassword()));
        userRepository.save(user);
        return new ResponseEntity<>("Registration is Successfully",
                HttpStatus.ACCEPTED);
    }

    // Handle the Login Of User
    public ResponseEntity<String> loginUser(String username, String password) {
        userEntity User = userRepository.findByUsername(username);
        // .orElseThrow(()->new UsernameNotFoundException("User not found"));
        if (User == null) {
            System.out.println("User not found for username: " + username);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }

        if (!passwordEncoder.matches(password, User.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
        String token = JwtTokenProvider.createToken(User.getUsername(), User.getRole());
        // return ResponseEntity.ok(new AuthResponse(token));
        return ResponseEntity.ok(token);
    }

    public String getuserName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        System.out.println(".....authentication............" + authentication);

        if (authentication == null || !authentication.isAuthenticated()
                || authentication instanceof AnonymousAuthenticationToken) {
            return "anonymous";
        }

        // Check if the principal is an instance of UserDetails
        Object principal = authentication.getPrincipal();
        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            return userDetails.getUsername();
        }

        // If the principal is not UserDetails, it might be a String (e.g., a username
        // in case of JWT)
        if (principal instanceof String) {
            return (String) principal;
        }

        // Fallback in case the principal is neither UserDetails nor a String
        return "Unknown";
    }

}
