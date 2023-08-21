package com.Tortuga.SpringBoot.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

    @Data
    @Entity(name = "users_tasks")
    public class UsersTasks {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "users_tasks_id")
        private Long usersTasksId;

        @Column(name = "fk_user_id")
        private Long fkUserId;

        @Column(name = "fk_task_id")
        private Long fkTaskId;

        @Column(name = "fk_tasks_categories_id")
        private Long fkTasksCategoriesId;

        // Otros campos y métodos si es necesario

    }


