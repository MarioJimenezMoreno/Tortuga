package com.Tortuga.SpringBoot.services.interfaces;

import java.util.List;

import com.Tortuga.SpringBoot.models.User;

public interface IUserService {
	List<User> findAllUsers();
}
