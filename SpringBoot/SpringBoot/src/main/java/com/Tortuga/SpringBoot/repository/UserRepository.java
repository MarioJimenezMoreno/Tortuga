package com.Tortuga.SpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Tortuga.SpringBoot.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {}