package com.example.springapp.Controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class ApiController {
    
    
    @RequestMapping(value="/{studentName}",method=RequestMethod.GET)
    public String getName(@PathVariable String studentName){
        return "Welcome "+studentName+"!";
    }
}
