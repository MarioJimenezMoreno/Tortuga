package com.Tortuga.SpringBoot.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name="tareas")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tarea_id;
    @Column(name="tarea")
    private String task;
    @Column(name="urgencia")
    private Boolean urgent;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fk_categoria_id;
    @Column(name="inicio")
    private java.sql.Date beginning;
    @Column(name="final")
    private java.sql.Date ending;
    @Column(name="duracion")
    private Double duration;

}
