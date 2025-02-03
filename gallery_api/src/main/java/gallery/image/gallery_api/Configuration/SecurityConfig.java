package gallery.image.gallery_api.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import gallery.image.gallery_api.Component.JwtAuthenticationFilter;
import gallery.image.gallery_api.Service.CustomUserDetailsService;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    // Constructor injection
    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/images/getImage").permitAll()
                        .requestMatchers("/api/images/postImage").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/postImage").authenticated()
                        .requestMatchers("/api/user/registerUser").permitAll()
                        .requestMatchers("/api/user/loginUser").permitAll()
                        .requestMatchers("/api/user/logout").permitAll()
                        .requestMatchers("/api/notify/postNotify").permitAll()
                        .requestMatchers("/api/user/getAllUser").permitAll()
                        .anyRequest().authenticated())
                // Here we pass the instance (jwtAuthenticationFilter) instead of the class.
                .csrf(csrf -> csrf.disable())
                .anonymous(anonymous -> anonymous.disable())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
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
