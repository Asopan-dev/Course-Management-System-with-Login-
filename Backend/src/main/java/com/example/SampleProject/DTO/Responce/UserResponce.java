package com.example.SampleProject.DTO.Responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponce {

    private String message;
    private Boolean status;

}
