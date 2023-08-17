/*package com.Tortuga.SpringBoot.Models;

import jakarta.persistence.*;
import lombok.Data;



@Data
@Entity(name = "users_tareas")
public class UserTasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer users_tasks_id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fk_user_id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fk_task_id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fk_task_category_id;

    @Column(name = "inicio")
    private java.sql.Date beginningDate;

    @Column(name = "final")
    private java.sql.Date endingDate;

    @Column(name= "duracion")
    private double duration;

}
*/