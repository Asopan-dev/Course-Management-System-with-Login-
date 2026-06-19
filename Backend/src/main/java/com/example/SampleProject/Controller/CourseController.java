package com.example.SampleProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.SampleProject.DTO.Request.CourseRequest;
import com.example.SampleProject.DTO.Responce.CourseResponce;
import com.example.SampleProject.Service.CourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    CourseService courseService;

    @PostMapping("/addCourse")
    public CourseResponce createCourse(@RequestBody CourseRequest request){

        return courseService.createCourse(request);
    }
    @GetMapping("/get_course")
    public List <CourseResponce> getAllCourse(){
        return courseService.viewallcourse();

    }
    @GetMapping("/{courseId}")
    public CourseResponce getById(@PathVariable Long courseId){
        return courseService.viewById(courseId);
    }

    @PutMapping("/update/{courseId}")
    public CourseResponce updateById(@PathVariable Long courseId,@RequestBody CourseRequest request){
    return courseService.updateCourse(courseId, request);
    }
    @DeleteMapping("/delete/{courseId}")
    public String deleteCourse(@PathVariable Long courseId){
        return courseService.deleteCourse(courseId);
    }
    
}
