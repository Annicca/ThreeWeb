package ru.konkurs.demo.security.auth;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import ru.konkurs.demo.enums.Role;
import ru.konkurs.demo.models.Profile;

import java.util.List;

public final class JwtUserFactory {
    public JwtUserFactory() {
    }

    public  static  JwtUser create(Profile profile){
        return new JwtUser(
                profile.getId(),
                profile.getLogin(),
                profile.getPassword(),
                mapToGrantedAuthorities(profile.getRole())
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(Role role) {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
}
