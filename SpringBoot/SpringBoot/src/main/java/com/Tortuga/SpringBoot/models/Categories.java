package com.Tortuga.SpringBoot.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

/*CREATE TABLE IF NOT EXISTS categorias(
categoria_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(45),
color VARCHAR(45),
color_code VARCHAR(45)
);*/
@Data
@Entity(name="categorias")
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="name")
    private String color;

    @Column(name="color_code")
    private String color_code;


}
