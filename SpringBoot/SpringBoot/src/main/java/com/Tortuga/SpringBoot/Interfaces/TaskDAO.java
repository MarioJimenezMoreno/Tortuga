package com.Tortuga.SpringBoot.Interfaces;

import com.Tortuga.SpringBoot.Models.Task;

import java.sql.Date;
import java.util.List;

public interface TaskDAO {
    List<Task> getTasks();


    List<Task> getTasksByDate(Date date);

    void save(Task task);

    void delete(String beginning_hour);
}
