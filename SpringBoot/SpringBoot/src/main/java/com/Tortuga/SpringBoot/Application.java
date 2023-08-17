package com.Tortuga.SpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.java.Log;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Log
@SpringBootApplication
@EntityScan("com.Tortuga.SpringBoot.Models")
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
