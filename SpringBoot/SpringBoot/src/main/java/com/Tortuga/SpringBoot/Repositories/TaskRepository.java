package com.Tortuga.SpringBoot.Repositories;

import com.Tortuga.SpringBoot.Models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> { }
