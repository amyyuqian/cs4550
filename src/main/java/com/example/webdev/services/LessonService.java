package com.example.webdev.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.webdev.models.Lesson;
import com.example.webdev.models.Module;
import com.example.webdev.repositories.LessonRepository;
import com.example.webdev.repositories.ModuleRepository;

@RestController
public class LessonService {
	@Autowired
	LessonRepository lessonRepository;
	@Autowired
	ModuleRepository moduleRepository;
	
	@GetMapping("/api/lesson")
	public List<Lesson> findAllLessons() {
		return (List<Lesson>) lessonRepository.findAll();
	}
	
	@PostMapping("/api/course/{cid}/module/{mid}/lesson")
	public Lesson createLesson(@PathVariable("cid")int cid, @PathVariable("mid") int mid,
			@RequestBody Lesson lesson) {
		Optional<Module> data = moduleRepository.findById(mid);
		
		if (data.isPresent()) {
			Module mod = data.get();
			lesson.setModule(mod);
			return lessonRepository.save(lesson);
		}
		return null;
	}
	
	@DeleteMapping("/api/lesson/{lessonId}")
	public void deleteLesson(@PathVariable("lessonId") int id) {
		lessonRepository.deleteById(id);
	}
	
	@GetMapping("/api/course/{cid}/module/{mid}/lesson")
	public List<Lesson> findAllLessonsForModule(@PathVariable("cid") int cid,
			@PathVariable("mid") int mid) {
		Optional<Module> data = moduleRepository.findById(mid);
		
		if (data.isPresent()) {
			Module mod = data.get();
			return mod.getLessons();
		}
		return null;
	}
}
