package com.example.springapp.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "student")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @Column(name="ID")
    @GeneratedValue
    private int id;

    @Column(name="NAME")
    private String name;

    @Column(name="DEPARTMENT")
    private String departmentName;

    @Column(name="MAIL")
    private String mailID;
}
