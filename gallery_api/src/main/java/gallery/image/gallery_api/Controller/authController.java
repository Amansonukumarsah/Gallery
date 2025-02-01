package gallery.image.gallery_api.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import gallery.image.gallery_api.Entity.userEntity;
import gallery.image.gallery_api.Service.authService;
import jakarta.servlet.http.HttpServletRequest;

@RequestMapping("/api/user/")
@RestController
public class authController {

    @Autowired
    private authService authService;

    @GetMapping("/resource")
    public ResponseEntity<String> getResource() {
        return ResponseEntity.ok("Resource content");
    }

    @GetMapping("/getAllUser")
    public List<userEntity> getAllUser() {
        return authService.getAllUser();
    }

    @PostMapping("/registerUser")
    public ResponseEntity<String> registerUser(@ModelAttribute userEntity registerUser) {
        return authService.registerUser(registerUser);
    }

    @PostMapping("/loginUser")
    public ResponseEntity<String> logiUser(
            @RequestParam("username") String username,
            @RequestParam("password") String password) {
        return authService.loginUser(username, password);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        System.out.println("......request..11............." + request);
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logged out successfully");
    }

}
