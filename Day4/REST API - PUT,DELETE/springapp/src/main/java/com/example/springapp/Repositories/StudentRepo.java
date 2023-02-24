package com.example.springapp.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.Models.Student;
public interface StudentRepo extends JpaRepository<Student,Integer>{
    
}
