package com.Tortuga.SpringBoot.controllers;

import com.Tortuga.SpringBoot.Interfaces.UserDAO;
import com.Tortuga.SpringBoot.models.User;
import com.Tortuga.SpringBoot.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UserDAO userDAO;

    @Autowired
    private JWTUtil jwtUtil;
    @RequestMapping(value= "api/login", method = RequestMethod.POST)
    public String login(@RequestBody User user) {
        User userLogged = userDAO.obtainUserByCredentials(user);
        if (userLogged !=null) {
           String tokenJwt =  jwtUtil.create( String.valueOf(userLogged.getId()), userLogged.getEmail());

            return tokenJwt;
        }
        return "FAIL";
    }
}
