package com.example.SampleProject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.SampleProject.DTO.Request.UserRequest;
import com.example.SampleProject.DTO.Responce.UserResponce;
import com.example.SampleProject.Service.UserService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {
    @Autowired
    UserService service;
    @PostMapping("/register")
    public UserResponce register(@RequestBody UserRequest request){
        return service.register(request);
    }
    @PostMapping("/login")
    public UserResponce login(@RequestBody UserRequest request){
        return service.login(request); 
    }

}
