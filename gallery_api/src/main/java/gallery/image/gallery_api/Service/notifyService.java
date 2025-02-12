package gallery.image.gallery_api.Service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class notifyService {

    @Autowired
    private StringRedisTemplate redisTemplate;

    private final KafkaTemplate<String, String> KafkaTemplate;

    private static final String FOLLOW_REQUEST_PREFIX = "followeRequest";

    public notifyService(KafkaTemplate<String, String> KafkaTemplate) {
        this.KafkaTemplate = KafkaTemplate;
    }

    public void sendFollowRequest(String followUserName) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        String message = currentUserName + " wants to follow " + followUserName;
        String key = FOLLOW_REQUEST_PREFIX + UUID.randomUUID().toString();
        // we can use key because same user go into the same partition in topic
        KafkaTemplate.send("follow-requests", key, message);
    }

    @KafkaListener(topics = "follow-requests", groupId = "follow-group")
    public void consumeFollowRequest(String message) {
        System.out.println("...message...aman.." + message);
        String[] messagePart = message.split(" wants to follow ");
        String follower = messagePart[0];
        String following = messagePart[1];
        redisTemplate.opsForList().rightPush("follow:" + following, follower);
    }

}
