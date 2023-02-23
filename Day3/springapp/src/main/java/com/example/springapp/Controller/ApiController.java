package com.example.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.Models.Employee;
import com.example.springapp.Service.ApiService;

@RestController
public class ApiController {
    @Autowired
    private ApiService  empservice;

    @PostMapping("/addemployee")
    public String postDetails(@RequestBody Employee e){
        empservice.saveDetails(e);
        return "Value Added";
    }

    @GetMapping("/getemployee")
    public List<Employee> getDetails(){
        return empservice.getAllDetails();
    }
}
