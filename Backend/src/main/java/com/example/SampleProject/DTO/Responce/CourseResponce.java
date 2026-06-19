package com.example.SampleProject.DTO.Responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponce {

    private Long courseId;

    private String courseName;

    private String duration;

    private Long courseFees;

    private String message;

}
