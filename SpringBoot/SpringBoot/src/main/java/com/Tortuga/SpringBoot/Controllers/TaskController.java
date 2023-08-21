package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;


@RestController
public class TaskController {

    @Autowired
    private TaskDAO taskDAO;
    @RequestMapping(value= "api/tasks", method = RequestMethod.GET)
    public List<Task> getTasks() {
        return taskDAO.getTasks();

    }

    @RequestMapping(value = "api/tasksByDate", method = RequestMethod.GET)
    public List<Task> getTasksByDate(@RequestParam("date") String dateString) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date;
        try {
            date = new Date(dateFormat.parse(dateString).getTime());
        } catch (ParseException e) {
            // Manejar la excepción en caso de que ocurra un error de parseo
            // Puedes retornar una respuesta de error o loguear la excepción
            return null;
        }

        List<Task> tasks = taskDAO.getTasksByDate(date);
        return tasks;
    }

}
