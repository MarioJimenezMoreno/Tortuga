package com.Tortuga.SpringBoot.controllers;

import com.Tortuga.SpringBoot.models.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @RequestMapping(value= "/api/login", method = RequestMethod.POST)
    public void login(@RequestBody User user) {
        if (UserDAO.verifyCredentials(user)) {

        }
    }
}
