package com.Tortuga.SpringBoot.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @Column(name="beginning_hour")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss")
    private Time beginning_hour;
    @Column(name="final_hour")
    @JsonFormat(shape = JsonFormagit.Shape.STRING, pattern = "HH:mm:ss")
    private Time final_hour;
    @Column(name="date")
    private Date date;
    @Column(name="duration")
    private Double duration;
}


