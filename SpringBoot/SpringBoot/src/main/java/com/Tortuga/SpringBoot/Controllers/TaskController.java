package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;


import java.sql.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.stream.Collectors;

@RestController
public class TaskController {
    @PersistenceContext
    private EntityManager entityManager;
    @Autowired
    private TaskDAO taskDAO;

    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping(value= "api/tasks", method = RequestMethod.GET)
    public List<Task> getTasks() {
        return taskDAO.getTasks();
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping(value = "api/dates", method = RequestMethod.GET)
    public List<Task> getTasksByDate(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") String dateString) {
        java.sql.Date date = java.sql.Date.valueOf(dateString);
        return taskDAO.getTasksByDate(date);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping(value = "api/session-dates", method = RequestMethod.GET)
    public List<Task> getTasksByDateAndEmail(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") String dateString,
                                             @RequestParam("email") String userEmail) {
        java.sql.Date date = java.sql.Date.valueOf(dateString);
        List<Task> tasksByDate = taskDAO.getTasksByDate(date);
        List<Task> filteredTasks = tasksByDate.stream()
                .filter(task -> task.getUserList().stream()
                        .anyMatch(user -> user.getEmail().equals(userEmail)))
                .collect(Collectors.toList());

        return filteredTasks;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping(value= "api/tasks", method = RequestMethod.POST)
    public void save(@RequestBody Task task ){
        taskDAO.save(task);
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping(value = "api/tasks", method = RequestMethod.DELETE)
    public void deleteTask(@RequestBody Integer id ) {
        taskDAO.delete(id);
    }
}
