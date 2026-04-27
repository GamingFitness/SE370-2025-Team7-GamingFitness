package com.example.servingwebcontent;

public interface UserBuilder {
    UserBuilder setUserName(String userName);
    UserBuilder setPassword(String password);
    UserBuilder setStyle(String style);
    UserBuilder setShots(int shots);
    User build();
}