package com.Tortuga.SpringBoot.DAO;

import com.Tortuga.SpringBoot.Interfaces.CategoriesDAO;
import com.Tortuga.SpringBoot.Models.Categories;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class CategoriesDAOImp implements CategoriesDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Categories> getCategories() {
        String query = "FROM categories ";
        return entityManager.createQuery(query).getResultList();
    }



}