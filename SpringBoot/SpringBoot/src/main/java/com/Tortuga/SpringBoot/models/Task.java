package com.Tortuga.SpringBoot.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "tareas")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tarea_id;

    @Column(name = "tarea")
    private String task;

    @Column(name = "nota")
    private String note;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fk_category_id;


}