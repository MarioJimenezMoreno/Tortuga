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
        String query = "FROM tasks";
        return entityManager.createQuery(query).getResultList();
    }



}
