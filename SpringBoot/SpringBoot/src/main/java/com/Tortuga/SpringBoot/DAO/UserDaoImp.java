package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.models.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class UserDaoImp implements UserDAO{
    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public List<User> getUsers() {
        String query = "FROM users";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void delete(Integer id) {
       User user = entityManager.find(User.class, id);
        entityManager.remove(user);
    }
}
