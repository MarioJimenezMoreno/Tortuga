package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import com.Tortuga.SpringBoot.Models.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

@Repository
@Transactional
public class TaskDAOImp implements TaskDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Task> getTasks() {
        String query = "FROM tasks"; // Cambio "tasks" a "Task" para usar el nombre de la entidad Java
        return entityManager.createQuery(query, Task.class).getResultList();
    }

    @Override
    public List<Task> getTasksByDate(Date date) {
        return null;
    }

/*
    public List<Task> getTasksByDate(Date date) {
        String query = "SELECT t FROM tasks t"
                + " JOIN UsersTasks ut ON t.task_id = ut.fk_task_id"
                + " JOIN Users u ON u.id = ut.fk_user_id"
                + " JOIN Categories c ON c.category_id = t.fk_category_id"
                + " WHERE t.date = :date";

        List<Task> tasks = entityManager.createQuery(query, Task.class)
                .setParameter("date", date)
                .getResultList();

        // Formatear la fecha en cada tarea
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        for (Task task : tasks) {
            task.setDateFormatted(dateFormat.format(task.getDate()));
        }

        return tasks;
    }*/

    @Override
    public void save(Task task) {
        entityManager.merge(task);
    }


    @Override
    public void delete(Integer id) {
        Task task = entityManager.find(Task.class, id);
        entityManager.remove(task);
    }

}








