package com.example.demo;

import com.example.demo.Domain.Role;
import com.example.demo.Domain.User;
import com.example.demo.Service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.Basic;
import java.util.ArrayList;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner run(UserService userService) {

        return args -> {
            userService.saveRole(new Role(null, "Role_User"));
            userService.saveRole(new Role(null, "Role_Agent"));
            userService.saveRole(new Role(null, "Role_Admin"));

            userService.saveUser(new User(null, "John", "john", "pass", new ArrayList<>()));
            userService.saveUser(new User(null, "Smith", "smith", "pass", new ArrayList<>()));
            userService.saveUser(new User(null, "Jim", "jim", "pass", new ArrayList<>()));

            userService.addRole("john", "Role_User");
            userService.addRole("smith", "Role_Agent");
            userService.addRole("jim", "Role_Admin");
            userService.addRole("jim", "Role_Agent");
        };
    }
}
