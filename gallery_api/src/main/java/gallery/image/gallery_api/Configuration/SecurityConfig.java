package gallery.image.gallery_api.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import gallery.image.gallery_api.Service.CustomUserDetailsService;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity HttpSecurity) throws Exception {
        HttpSecurity
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/images/getImage").permitAll()
                        .requestMatchers("/api/images/postImage").permitAll()
                        .requestMatchers("/api/user/registerUser").permitAll()
                        .requestMatchers("/api/user/loginUser").permitAll()
                        .requestMatchers("/api/user/logout").permitAll()
                        .requestMatchers("/api/notify/postNotify").permitAll()
                        .requestMatchers("/api/user/getAllUser").permitAll())
                // .anyRequest().denyAll())
                .csrf(csrf -> csrf.disable());

        return HttpSecurity.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {

        return new CustomUserDetailsService();
    }

}
