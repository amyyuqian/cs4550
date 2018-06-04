package com.example.webdev.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdev.models.MultipleChoiceQuestion;

public interface MultipleChoiceQuestionRepository 
	extends CrudRepository<MultipleChoiceQuestion, Integer>{

}
