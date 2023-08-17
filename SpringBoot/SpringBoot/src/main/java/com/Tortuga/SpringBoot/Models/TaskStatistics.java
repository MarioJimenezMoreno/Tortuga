package com.Tortuga.SpringBoot.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import java.sql.Timestamp;

import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class TaskStatistics {
    @Column
    private String username;

    @Column
    private Timestamp inicio;

    @Column
    private String tarea;

    @Column
    private Double duracion;

    @Column
    private String colorCode;
    @Id
    private Long id;

    public TaskStatistics() {
    }

    public TaskStatistics(String username, Timestamp inicio, String tarea, Double duracion, String colorCode) {
        this.username = username;
        this.inicio = inicio;
        this.tarea = tarea;
        this.duracion = duracion;
        this.colorCode = colorCode;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}