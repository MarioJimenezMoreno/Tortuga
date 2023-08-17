package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Task;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class TaskDAOImp implements TaskDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Task> getTasks() {
        String query = "FROM tareas ";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<TaskStatistics> getStatistics(String username) {
        String query = "SELECT new com.Tortuga.SpringBoot.Models.TaskStatistics(u.username, t.inicio, t.task, t.duracion, c.colorCode) " +
                "FROM Task t " +
                "JOIN UsersTareas ut ON t.tarea_id = ut.fk_tarea_id " +
                "JOIN User u ON ut.fk_user_id = u.id " +
                "JOIN Categoria c ON t.fk_categoria_id = c.categoria_id " +
                "WHERE u.username = :username";

        TypedQuery<TaskStatistics> typedQuery = entityManager.createQuery(query, TaskStatistics.class);
        typedQuery.setParameter("username", username);

        return typedQuery.getResultList();
    }


}
