package com.Tortuga.SpringBoot.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Data
@Entity(name= "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter
	private Integer id;

	@Getter @Setter @Column(name = "username")
	private String name;

	@Getter @Setter @Column(name = "password")
	private String password;

	@Getter @Setter @Column(name = "email")
	private String email;

	@Getter @Setter @Column(name = "phone")
	private String phone;
}
