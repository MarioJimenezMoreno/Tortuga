package com.Tortuga.SpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.java.Log;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@Log
@SpringBootApplication
@EntityScan("com.Tortuga.SpringBoot.Models")
@ComponentScan(basePackages = "com.Tortuga")
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
