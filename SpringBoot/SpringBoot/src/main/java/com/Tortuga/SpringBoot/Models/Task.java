package com.Tortuga.SpringBoot.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Timestamp;
@Data
@Entity(name="tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer task_id;
    @Column(name="task")
    private String task;
    @Column(name="urgencia")
    private Boolean urgencia;
    @Column(name="fk_category_id")
    private Integer fk_category_id;
    @Column(name="initialHour")
    private Timestamp initialHour;
    @Column(name="finalHour")
    private Timestamp finalHour;
    @Column(name="duration")
    private Double duration;

}
