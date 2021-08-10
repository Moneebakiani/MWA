package com.example.demo.Service;

import com.example.demo.Domain.Role;
import com.example.demo.Domain.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRole(String username,  String roleName);
    User getUser(String username);
    List<User>getUsers();
}
