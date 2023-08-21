package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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
