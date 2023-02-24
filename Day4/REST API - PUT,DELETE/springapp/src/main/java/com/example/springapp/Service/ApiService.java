package com.example.springapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.Models.Student;
import com.example.springapp.Repositories.StudentRepo;

@Service
public class ApiService {
    @Autowired
    private StudentRepo stu;

    public Student saveDetails(Student s){
        return stu.save(s);
    }

    public List<Student> getDetails(){
        return stu.findAll();
    }
    public Student getStudentobj(int id){
        return stu.findById(id).orElse(null);
    }

    public Student updateStudent(int id,Student s){
        return stu.save(s);
    }

    public void deleteDetails(int id){
        stu.deleteById(id);
    }

}
