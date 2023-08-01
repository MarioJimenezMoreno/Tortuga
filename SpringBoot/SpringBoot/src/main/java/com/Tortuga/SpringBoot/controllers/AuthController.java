package com.Tortuga.SpringBoot.controllers;

import com.Tortuga.SpringBoot.DAO.UserDAO;
import com.Tortuga.SpringBoot.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UserDAO userDAO;
    @RequestMapping(value= "/api/login", method = RequestMethod.POST)
    public String login(@RequestBody User user) {
        if (userDAO.verifyCredentials(user)) {
            return "OK";
        }
        return "FAIL";
    }
}
