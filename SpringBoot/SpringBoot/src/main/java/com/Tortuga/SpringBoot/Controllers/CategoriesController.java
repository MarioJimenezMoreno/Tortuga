package com.Tortuga.SpringBoot.Controllers;

import com.Tortuga.SpringBoot.Interfaces.CategoriesDAO;
import com.Tortuga.SpringBoot.Interfaces.TaskDAO;
import com.Tortuga.SpringBoot.Models.Categories;
import com.Tortuga.SpringBoot.Models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoriesController{

    @Autowired
    private CategoriesDAO categoriesDAO;
    @RequestMapping(value= "api/categories", method = RequestMethod.GET)
    public List<Categories> getCategories() {
        return categoriesDAO.getCategories();

    }


}
