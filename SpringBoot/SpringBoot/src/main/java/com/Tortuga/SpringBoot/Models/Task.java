package com.Tortuga.SpringBoot.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Date;
import java.sql.Time;
@Data
@Entity(name="tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer task_id;
    @Column(name="title")
    private String title;
    @Column(name="description")
    private String description;
    @Column(name="fk_category_id")
    private Integer fk_category_id;
    @Column(name="initialHour")
    private Time initialHour;
    @Column(name="finalHour")
    private Time finalHour;
    @Column(name="date")
    private Date date;
    @Column(name="duration")
    private Double duration;

}
