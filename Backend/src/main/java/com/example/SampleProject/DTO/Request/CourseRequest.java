package com.example.SampleProject.DTO.Request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseRequest {

    private Long courseId;

    private String courseName;

    private String duration;

    private Long courseFees;
    
}
