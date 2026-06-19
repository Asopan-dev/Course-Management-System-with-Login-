package com.example.SampleProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SampleProject.Model.Course;


public interface CourseRepo extends  JpaRepository<Course,Long>{
    
}
