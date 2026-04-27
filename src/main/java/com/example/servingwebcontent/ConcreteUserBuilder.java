package com.example.servingwebcontent;

public class ConcreteUserBuilder implements UserBuilder {

    private User user;

    public ConcreteUserBuilder() {
        this.reset();
    }

    private void reset() {
        this.user = new User();
    }

    @Override
    public UserBuilder setUserName(String userName) {
        this.user.setUserName(userName);
        return this;
    }

    @Override
    public UserBuilder setPassword(String password) {
        this.user.setPassword(password);
        return this;
    }

    @Override
    public UserBuilder setStyle(String style) {
        this.user.setStyle(style);
        return this;
    }

    @Override
    public UserBuilder setShots(int shots) {
        this.user.setShots(shots);
        return this;
    }

    @Override
    public User build() {
        User result = this.user;
        this.reset(); // ready for next build
        return result;
    }
}