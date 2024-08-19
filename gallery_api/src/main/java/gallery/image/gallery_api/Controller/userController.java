package gallery.image.gallery_api.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gallery.image.gallery_api.Entity.userEntity;
import gallery.image.gallery_api.Service.userService;

@RequestMapping("/api/user/")
@RestController
public class userController {

    @Autowired
    private userService userService;

    @PostMapping("/registerUser")
    public ResponseEntity<String> registerUser(@RequestBody userEntity registerUser) {
        return userService.RegisterUser(registerUser);
    }
}
