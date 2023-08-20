package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@RestController
public class TaskController {

    @PersistenceContext
    private EntityManager entityManager;  // Inyecta EntityManager
    @Autowired
    private TaskDAO taskDAO;
    @RequestMapping(value= "api/tasks", method = RequestMethod.GET)
    public List<Task> getTasks() {
        return taskDAO.getTasks();

    }
    @RequestMapping(value = "api/tasksWithDetails", method = RequestMethod.GET)
    public List<Object[]> getTasksWithDetails(@RequestParam String username) {
        String sql = "SELECT u.username, t.date, c.name, t.duration, c.color_code " +
                "FROM tasks t " +
                "JOIN users_tasks ut ON t.task_id = ut.fk_task_id " +
                "JOIN users u ON u.id = ut.fk_user_id " +
                "JOIN categories c ON c.category_id = t.fk_category_id " +
                "WHERE u.username = :username";

        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("username", username);

        List<Object[]> result = query.getResultList();
        return result;
    }

}
