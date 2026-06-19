package com.example.SampleProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="course_data")
public class Course {

    @Id
    private Long courseId;
    private String courseName;
    private String duration;
    private Long courseFees;

}
