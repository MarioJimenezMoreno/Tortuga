package com.Tortuga.SpringBoot.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

/*
    tarea_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tarea VARCHAR(45),
    urgencia BOOLEAN,
    nota VARCHAR(150),
    fk_categoria_id INT,
    inicio DATETIME,
    final DATETIME,
    duracion DOUBLE*/
@Data
@Entity(name="tareas")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer task_id;
}
