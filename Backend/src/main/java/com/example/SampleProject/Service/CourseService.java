package com.example.SampleProject.Service;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.SampleProject.DTO.Request.CourseRequest;
import com.example.SampleProject.DTO.Responce.CourseResponce;
import com.example.SampleProject.Model.Course;
import com.example.SampleProject.Repository.CourseRepo;

@Service
public class CourseService {
    @Autowired
    private CourseRepo repo;

    public CourseResponce createCourse(CourseRequest request){

        Course course = new Course();
        course.setCourseId(request.getCourseId());
        course.setCourseName(request.getCourseName());
        course.setDuration(request.getDuration());
        course.setCourseFees(request.getCourseFees());

        Course saved=repo.save(course);

        CourseResponce data=new CourseResponce();
        data.setCourseId(saved.getCourseId());
        data.setCourseName(saved.getCourseName());
        data.setDuration(saved.getDuration());
        data.setCourseFees(saved.getCourseFees());
        data.setMessage("Created successful");
        
        return data;

    }

    public List<CourseResponce> viewallcourse(){
        return repo.findAll().stream().map((course)->{
            CourseResponce responce=new CourseResponce();
            responce.setCourseId(course.getCourseId());
            responce.setCourseName(course.getCourseName());
            responce.setDuration(course.getDuration());
            responce.setCourseFees(course.getCourseFees());
            responce.setMessage("Course Created");
            
            return responce;

        }).collect(Collectors.toList());
    }
    public CourseResponce viewById(Long courseId){
        Course course=repo.findById(courseId).orElseThrow();
        CourseResponce responce=new CourseResponce();
            responce.setCourseId(course.getCourseId());
            responce.setCourseName(course.getCourseName());
            responce.setDuration(course.getDuration());
            responce.setCourseFees(course.getCourseFees());
            responce.setMessage("Course Created");

            return responce;
    }

    public CourseResponce updateCourse(Long courseId,CourseRequest request){
        Course course=repo.findById(courseId).orElseThrow();
        course.setCourseName(request.getCourseName());
        course.setDuration(request.getDuration());
        course.setCourseFees(request.getCourseFees());
        Course update=repo.save(course);

        CourseResponce responce=new CourseResponce();
        responce.setCourseId(update.getCourseId());
        responce.setCourseName(update.getCourseName());
        responce.setDuration(update.getDuration());
        responce.setCourseFees(update.getCourseFees());
        responce.setMessage("<<<<<<<Course Updated Successfully>>>>>>");

        return responce;

    }

    public String deleteCourse(Long courseId){
        repo.deleteById(courseId);
        return "Course Delete";
    }
}
