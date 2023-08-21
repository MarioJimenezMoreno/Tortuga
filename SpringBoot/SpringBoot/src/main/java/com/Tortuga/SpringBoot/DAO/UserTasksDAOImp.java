package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.Interfaces.UserTasksDAO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class UserTasksDAOImp implements UserTasksDAO {
    @PersistenceContext
    private EntityManager entityManager;

}
