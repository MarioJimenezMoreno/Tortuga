package com.Tortuga.SpringBoot.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Tortuga.SpringBoot.models.User;
import com.Tortuga.SpringBoot.repository.UserRepository;
import com.Tortuga.SpringBoot.services.interfaces.IUserService;

@Service
public class UserService implements IUserService {
//	@Autowired
//	UserRepository userRepository;
	UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}

}
