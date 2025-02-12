package gallery.image.gallery_api.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @Autowired
    private StringRedisTemplate redisTemplate;

    @PostMapping("/postNotify")
    public ResponseEntity<?> postNotify(@RequestBody Map<String, String> payload) {
        String followUser = payload.get("username");
        notifyService.sendFollowRequest(followUser);
        return ResponseEntity.ok("Notification Send SuccessFully");
    }

    @GetMapping("/getNotify")
    public ResponseEntity<List<String>> getNotify() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        String userName = authentication.getName();
        List<String> message = redisTemplate.opsForList().range("message" + userName, 0, -1);
        System.out.println("...........message.........." + message);
        return ResponseEntity.ok(message);
    }

    @PostMapping("/postNotifyFollow")
    public ResponseEntity<String> postNotifyFollow() {
        return ResponseEntity.ok("Follow has been Accepted");
    }

}
