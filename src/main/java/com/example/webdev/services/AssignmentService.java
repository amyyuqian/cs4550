package com.example.webdev.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.models.Lesson;
import com.example.webdev.models.Widget;
import com.example.webdev.models.Assignment;
import com.example.webdev.repositories.LessonRepository;
import com.example.webdev.repositories.AssignmentRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class AssignmentService {
	@Autowired
	LessonRepository lessonRepo;
	@Autowired
	AssignmentRepository assignRepo;
	
	@GetMapping("/api/assignment")
	public List<Assignment> findAllAssignments() {
		return (List<Assignment>) assignRepo.findAll();
	}
	
	@GetMapping("/api/assignment/{id}")
	public Assignment findAssignmentById(@PathVariable("id") int id) {
		Optional<Assignment> data = assignRepo.findById(id);
		
		if (data.isPresent()) {
			return data.get();
		}
		return null;
	}
	
	@GetMapping("/api/lesson/{lid}/assignment")
	public List<Widget> findAssignmentsByLesson(@PathVariable("lid") int lid) {
		Optional<Lesson> data = lessonRepo.findById(lid);
		
		if (data.isPresent()) {
			Lesson l = data.get();
			return l.getAssignments();
		}
		return null;
	}
	
	@PostMapping("/api/lesson/{lid}/assignment")
	public Assignment createAssignment(@PathVariable("lid") int lid,
			@RequestBody Assignment body) {
		Optional<Lesson> data = lessonRepo.findById(lid);
		
		if (data.isPresent()) {
			Lesson l = data.get();
			body.setLesson(l);
			return assignRepo.save(body);
		}
		return null;
	}
	
	@DeleteMapping("/api/assignment/{id}")
	public void deleteAssignment(@PathVariable("id") int id) {
		assignRepo.deleteById(id);
	}
	
	@PutMapping("/api/assignment/{id}")
	public Assignment updateAssignment(@PathVariable("id") int id, @RequestBody Assignment body) {
		Optional<Assignment> data = assignRepo.findById(id);
		
		if (data.isPresent()) {
			Assignment a = data.get();
			a.setPoints(body.getPoints());
			a.setText(body.getText());
			a.setTitle(body.getTitle());
			return assignRepo.save(a);
		}
		return null;
	}
}
