package com.Tortuga.SpringBoot.Interfaces;

import com.Tortuga.SpringBoot.Models.Task;

import java.util.List;

public interface TaskDAO {
    List<Task> getTasks();

/*
    List<Task> getStatistics2();*/

    List<TaskStatistics> getStatistics(String username);
}
