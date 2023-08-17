package com.Tortuga.SpringBoot.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Tortuga.SpringBoot.Models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {}