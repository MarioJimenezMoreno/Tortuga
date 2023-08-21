package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.UserDAO;
import com.Tortuga.SpringBoot.Models.User;
import com.Tortuga.SpringBoot.Utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AuthController {
    @Autowired
    private UserDAO userDAO;

    @Autowired
    private JWTUtil jwtUtil;
    @CrossOrigin(origins = "http://localhost:5173")
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
