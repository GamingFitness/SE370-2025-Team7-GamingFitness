package com.example.servingwebcontent;

public class UserDirector {

    private UserBuilder builder;

    public UserDirector(UserBuilder builder) {
        this.builder = builder;
    }

    public void setBuilder(UserBuilder builder) {
        this.builder = builder;
    }

    // Builds a minimal user (just name + password)
    public User buildBasicUser(String userName, String password) {
        return builder
            .setUserName(userName)
            .setPassword(password)
            .build();
    }

    // Builds a full user with style and shots
    public User buildFullUser(String userName, String password, String style, int shots) {
        return builder
            .setUserName(userName)
            .setPassword(password)
            .setStyle(style)
            .setShots(shots)
            .build();
    }
}