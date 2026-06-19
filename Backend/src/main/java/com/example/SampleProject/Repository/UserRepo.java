package com.example.SampleProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SampleProject.Model.User;

public interface UserRepo extends JpaRepository<User,String> {
    User findByEmail(String email);

}
