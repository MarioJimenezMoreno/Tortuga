package com.Tortuga.SpringBoot.Interfaces;

import com.Tortuga.SpringBoot.Models.User;

import java.util.List;

public interface UserDAO {
    List<User> getUsers();

    void delete(Integer id);

    User obtainUserByCredentials(User user);


    User getUserById(Integer id);

    void register(User user);
}
