package com.Tortuga.SpringBoot.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

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
    @Column(name="category")
    private String category;
    @Column(name="color_code")
    private String color_code;
    @Column(name="beginning_hour")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String beginning_hour;
    @Column(name="final_hour")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String final_hour;
    @Column(name="date")
    private Date date;
    @Column(name="duration")
    private String duration;

    @ManyToMany
    @JoinTable(name = "tasks_users", joinColumns = @JoinColumn(name="task_id"),inverseJoinColumns = @JoinColumn(name = "id"))
    List<User> userList;
}


