package com.example.webdev.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdev.models.Exam;

public interface ExamRepository extends CrudRepository<Exam, Integer>{

}
