package ru.konkurs.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import ru.konkurs.demo.models.Profile;

public class AuthenticationResponseDTO {
    @JsonProperty("user")
    private Profile authUser;
    private String token;

    public Profile getAuthUser() {
        return authUser;
    }

    public void setAuthUser(Profile authUser) {
        this.authUser = authUser;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public AuthenticationResponseDTO(Profile user,String token){
        this.authUser = user;
        this.token = token;
    }
}
