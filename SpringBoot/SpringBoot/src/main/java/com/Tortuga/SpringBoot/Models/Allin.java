package com.Tortuga.SpringBoot.Models;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name="Allin")
public class Allin {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer task_id;
	@Column(name = "username")
	private String username;
	@Column(name="date")
    private Date date;
	@Column(name="name")
    private String name;
	@Column(name="duration")
    private Double duration;
	@Column(name="color_code")
    private String color_code;
}
