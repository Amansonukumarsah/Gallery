package gallery.image.gallery_api.Service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class notifyService {

    @Autowired
    private StringRedisTemplate redisTemplate;

    @Autowired
    private authService authService;

    private final KafkaTemplate<String, String> KafkaTemplate;

    private static final String FOLLOW_REQUEST_PREFIX = "followeRequest";

    public notifyService(KafkaTemplate<String, String> KafkaTemplate) {
        this.KafkaTemplate = KafkaTemplate;
    }

    public void sendFollowRequest(String followUserName) {
        String current_user = authService.getuserName();
        String message = current_user + " wants to follow " + followUserName;
        String key = FOLLOW_REQUEST_PREFIX + UUID.randomUUID().toString();
        KafkaTemplate.send("follow-requests", message);
    }

    // @KafkaListener(topics = "follow-requests", groupId = "follow-group")
    public void consumeFollowRequest(String message) {

        System.out.println("...message....." + message);

    }

}
