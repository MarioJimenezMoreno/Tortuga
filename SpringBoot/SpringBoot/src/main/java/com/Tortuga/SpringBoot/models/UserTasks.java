package com.Tortuga.SpringBoot.models;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

/*
CREATE TABLE IF NOT EXISTS tareas(
tarea_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
tarea VARCHAR(45),
urgencia BOOLEAN,
nota VARCHAR(150),
fk_categoria_id INT,
inicio DATETIME,
final DATETIME,
duracion DOUBLE
);
*/

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
    private java.sql.Date BeginningDate;

    @Column(name = "final")
    private java.sql.Date EndingDate;

    @Column(name= "duracion")
    private double Duration;

}
