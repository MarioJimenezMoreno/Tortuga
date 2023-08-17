package com.Tortuga.SpringBoot.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Timestamp;
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
    @Column(name="fk_categoria_id")
    private Integer fk_category_id;
    @Column(name="inicio")
    private Timestamp inicio;
    @Column(name="finalxd")
    private Timestamp finalxd;
    @Column(name="duracion")
    private Double duracion;

}
