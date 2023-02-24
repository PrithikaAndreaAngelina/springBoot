package com.example.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.Models.Student;
import com.example.springapp.Service.ApiService;

@RestController
public class ApiController {
   
    @Autowired
    private ApiService apiService;
    

    @PostMapping("/")
    public String addStudent(@RequestBody Student s){
        apiService.saveDetails(s);
        return "Student Added Successfully";
    }
    @GetMapping("/")
    public List<Student> getStudent(){
        return apiService.getDetails();
    }
    @GetMapping("/{id}")
    public Student getStudentobj(@PathVariable int id){
        return apiService.getStudentobj(id);
    }


    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id,@RequestBody Student s){
        return apiService.updateStudent(id,s);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id){
        apiService.deleteDetails(id);
        return "Student Deleted Successfully";
    }
}
