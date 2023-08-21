package com.Tortuga.SpringBoot.Interfaces;

import com.Tortuga.SpringBoot.Models.Allin;
import com.Tortuga.SpringBoot.Models.Task;

import java.sql.Date;
import java.util.List;


public interface TaskDAO {
	private String username;
    private Date date;
    private String name;
    private int duration;
    private String colorCode;
    
    List<Task> getTasks();

    List<Task> getTasksByDate(Date date);

    void save(Task task);

    void delete(Integer id);

	List<Allin> getAllTasks(String username);
}
