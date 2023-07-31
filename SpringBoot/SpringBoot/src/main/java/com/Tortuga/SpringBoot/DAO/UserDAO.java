package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.models.User;

import java.util.List;

public interface UserDAO {
    List<User> getUsers();

    void delete(Integer id);

    boolean verifyCredentials(User user);

    void register(User user);
}
