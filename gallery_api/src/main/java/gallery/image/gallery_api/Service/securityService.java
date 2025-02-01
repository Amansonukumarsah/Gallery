package gallery.image.gallery_api.Service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import gallery.image.gallery_api.Component.JwtTokenProvider;

@Service
public class securityService {

    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailsService customUserDetailsService;

    public securityService(JwtTokenProvider jwtTokenProvider, CustomUserDetailsService customUserDetailsService) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.customUserDetailsService = customUserDetailsService;
    }

    public void setSecurityContextHolder(String token) {
        String currentUser = jwtTokenProvider.getUsername(token);
        System.out.println("Current User: " + currentUser);

        if (currentUser == null || currentUser.isEmpty()) {
            throw new RuntimeException("Invalid token: Unable to extract username.");
        }

        UserDetails userDetails = customUserDetailsService.loadUserByUsername(currentUser);
        System.out.println("User Details: " + userDetails);

        if (jwtTokenProvider.validateToken(token, userDetails)) {
            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities());
            System.out.println("Authentication: " + auth);
            SecurityContextHolder.getContext().setAuthentication(auth);
        } else {
            throw new RuntimeException("Token validation failed.");
        }
    }

    public String getUserName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Authentication: " + authentication);

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new RuntimeException("No authenticated user found.");
        }

        Object principal = authentication.getPrincipal();

        if (principal instanceof UserDetails userDetails) {
            System.out.println("Principal: UserDetails");
            return userDetails.getUsername();
        } else if (principal instanceof String username) {
            System.out.println("Principal: String Username");
            return username;
        }

        // Fallback case
        return "Unknown";
    }
}
