package com.example.webdev.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdev.models.FillInTheBlankQuestion;

public interface FillInTheBlankQuestionRepository 
	extends CrudRepository<FillInTheBlankQuestion, Integer>{

}
