package com.example.springapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.Models.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    
}
