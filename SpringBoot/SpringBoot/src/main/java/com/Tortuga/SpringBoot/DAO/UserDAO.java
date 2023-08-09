package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.models.User;

import java.util.List;

public interface UserDAO {
    List<User> getUsers();

    void delete(Integer id);

    User obtainUserByCredentials(User user);


    User getUserById(Integer id);

    void register(User user);
}
