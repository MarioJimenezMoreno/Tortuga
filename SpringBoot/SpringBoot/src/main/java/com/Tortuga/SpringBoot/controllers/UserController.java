package com.Tortuga.SpringBoot.controllers;

import java.util.List;

import com.Tortuga.SpringBoot.DAO.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import com.Tortuga.SpringBoot.models.User;

@RestController

public class UserController {

	@Autowired
	private UserDAO userDAO;


	//Obtener usuario
	@RequestMapping(value= "/api/users", method = RequestMethod.GET)
	public List<User> getUsers() {
		return userDAO.getUsers();
	}
	@RequestMapping(value= "/api/users", method = RequestMethod.POST)
	public void registerUser(@RequestBody User user) {
		 userDAO.register(user);
	}
	@RequestMapping(value = "/api/user/{id}", method = RequestMethod.GET)
	public void getUser() {

	}

	@RequestMapping(value = "/api/user/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable Integer id ) {
		userDAO.delete(id);
	}

}
