package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import com.Tortuga.SpringBoot.Models.User;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@RestController
public class TaskController {

    @PersistenceContext
    private EntityManager entityManager;
    @Autowired
    private TaskDAO taskDAO;
    @RequestMapping(value= "api/tasks", method = RequestMethod.GET)
    public List<Task> getTasks() {
        return taskDAO.getTasks();

    }


    @RequestMapping(value= "api/tasks", method = RequestMethod.POST)
    public void save(@PathVariable Task task ){
        taskDAO.save(task);
    }
    @RequestMapping(value = "api/tasks", method = RequestMethod.DELETE)
    public void deleteTask(@PathVariable Integer id ) {
        taskDAO.delete(id);
    }


}
