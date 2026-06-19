package com.example.SampleProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SampleProject.DTO.Request.UserRequest;
import com.example.SampleProject.DTO.Responce.UserResponce;
import com.example.SampleProject.Model.User;
import com.example.SampleProject.Repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public UserResponce register(UserRequest request){
        User user=new User();
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        userRepo.save(user);
        return new UserResponce("Registration Successfull",true);

    }

    public UserResponce login (UserRequest request){
        User users=userRepo.findByEmail(request.getEmail());
        if(users==null){
            return new UserResponce("Email note found",false );
        }
        if(users.getPassword().equals(request.getPassword())){
            return new UserResponce("Logic SuccessFul",true);
        }
        else{
            return new UserResponce("Login failed", false);
        }
    }
}
