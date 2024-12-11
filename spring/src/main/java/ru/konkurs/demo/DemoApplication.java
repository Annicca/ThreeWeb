package ru.konkurs.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"ru.konkurs.demo.controllers", "ru.konkurs.demo.services", "ru.konkurs.demo.config", "ru.konkurs.demo.security" , "ru.konkurs.demo.security.auth"})
@EntityScan(basePackages = {"ru.konkurs.demo.models"})
@EnableJpaRepositories("ru.konkurs.demo.repositories")
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
