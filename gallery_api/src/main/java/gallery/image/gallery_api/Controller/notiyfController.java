package gallery.image.gallery_api.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gallery.image.gallery_api.Service.notifyService;

// @CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/notify")
public class notiyfController {

    @Autowired
    private notifyService notifyService;

    @PostMapping("/postNotify")
    public ResponseEntity<?> postNotify(@RequestBody Map<String, String> payload) {
        String followUser = payload.get("username");
        System.out.println(".........followUser.............." + followUser);
        notifyService.sendFollowRequest(followUser);
        return ResponseEntity.ok("Notification Send SuccessFully");
    }

    @GetMapping("/getNotify")
    public ResponseEntity<String> getNotify() {

        return ResponseEntity.ok("Notification Send SuccessFully");
    }

}
