package com.Tortuga.SpringBoot.Controllers;

import java.util.List;

import com.Tortuga.SpringBoot.Interfaces.UserDAO;
import com.Tortuga.SpringBoot.Utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.Tortuga.SpringBoot.Models.User;

@RestController
public class UserController {

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private JWTUtil jwtUtil;
	private boolean tokenValidation (String token){
		String userID = jwtUtil.getKey(token);
		return userID != null;
	}
	@CrossOrigin(origins = "http://localhost:5173")
	@RequestMapping(value= "api/users", method = RequestMethod.GET)
	public List<User> getUsers() {
		return userDAO.getUsers();
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@RequestMapping(value= "api/users/register", method = RequestMethod.POST)
	public void registerUser(@RequestBody User user) {
		Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
		String hash = argon2.hash(1,1024,1, user.getPassword());
		user.setPassword(hash);
		userDAO.register(user);
	}
	@CrossOrigin(origins = "http://localhost:5173")
	@RequestMapping(value = "api/users/{id}", method = RequestMethod.GET)
	public User getUser(@PathVariable Integer id) {
		return userDAO.getUserById(id);
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@RequestMapping(value = "api/users/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@RequestHeader (value = "Authorization") String token,
						   @PathVariable Integer id ) {
		if (!tokenValidation(token)){return;}
		userDAO.delete(id);
	}

}
