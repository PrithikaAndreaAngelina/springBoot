package com.example.springapp.Controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class ApiController {
    @RequestMapping(value="/{yourFavColor}",method=RequestMethod.GET)
    public String getName(@PathVariable String yourFavColor){
        return "My favorite color is "+yourFavColor;
    }
}
