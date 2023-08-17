package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class TaskController {

    @Autowired
    private TaskDAO taskDAO;
    @RequestMapping(value= "api/tasks", method = RequestMethod.GET)
    public List<Task> getTasks() {
        return taskDAO.getTasks();

    }
    @RequestMapping("api/statistics")
    public List<TaskStatistics> getStatistics() {
        String username = "quim"; // Cambiar el nombre de usuario si es necesario
        return taskDAO.getStatistics(username);
    }

}
