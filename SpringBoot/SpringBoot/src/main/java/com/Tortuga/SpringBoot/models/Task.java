package com.Tortuga.SpringBoot.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

/*
* tarea_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
tarea VARCHAR(45),
urgencia BOOLEAN,
nota VARCHAR(150),
fk_categoria_id INT
* */
@Data
@Entity(name = "tareas")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tarea_id;

    @Column(name = "tarea")
    private String task;

    @Column(name = "urgencia")
    private Boolean important;


    @Column(name = "nota")
    private String note;

    @Column(name = "fk_categoria_id")
    private Integer category_fk_id  ;
}
