package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.Interfaces.UserDAO;
import com.Tortuga.SpringBoot.Models.User;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
@Transactional
public class UserDAOImp implements UserDAO {
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

    @Override
    public User getUserById(Integer id) {
        return entityManager.find(User.class, id);
    }
    @Override
    public void register(User user) {
        entityManager.merge(user);
}
    @Override
    public User obtainUserByCredentials(User user) {
        String query = "FROM users WHERE email = :email";
        List<User> list = entityManager.createQuery(query)
                .setParameter("email", user.getEmail())
                .getResultList();

        if (list.isEmpty()) {

            return null;
        }
        String hashedPassword = list.get(0).getPassword();
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if ( argon2.verify(hashedPassword, user.getPassword())) {
            return list.get(0);
        }
        return null;
    }
}
