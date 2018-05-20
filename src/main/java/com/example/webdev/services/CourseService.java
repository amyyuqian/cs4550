package com.example.webdev.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.models.Course;
import com.example.webdev.repositories.CourseRepository;

@RestController
public class CourseService {
	@Autowired
	CourseRepository courseRepository;	
	@GetMapping("/api/course")
	public List<Course> findAllCourses() {
		return (List<Course>) courseRepository.findAll(); 
	}
	
	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
			return courseRepository.save(course);
	}

}
