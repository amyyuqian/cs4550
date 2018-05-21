package com.example.webdev.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.models.Course;
import com.example.webdev.models.Module;
import com.example.webdev.repositories.CourseRepository;
import com.example.webdev.repositories.ModuleRepository;

@RestController
public class ModuleService {
	@Autowired
	ModuleRepository moduleRepository;	
	@Autowired
	CourseRepository courseRepository;
	
	@GetMapping("/api/module")
	public List<Module> findAllModules() {
		return (List<Module>) moduleRepository.findAll(); 
	}

	@PostMapping("/api/course/{cid}/module")
	public Module createModule(@PathVariable("cid") int cid, @RequestBody Module module) {
		Optional<Course> data = courseRepository.findById(cid);

		if(data.isPresent()) {
			Course course = data.get();
			course.setModified(new Date());
			module.setCourse(course);
			return moduleRepository.save(module);
		}
		return null;	
	}

	@DeleteMapping("/api/module/{moduleId}")
	public void deleteModule(@PathVariable("moduleId") int id) {
		Optional<Module> data = moduleRepository.findById(id);
		
		if (data.isPresent()) {
			Module m = data.get();
			Course course = m.getCourse();
			course.setModified(new Date());
		}
		moduleRepository.deleteById(id);
	}

	@GetMapping("/api/course/{cid}/module")
	public List<Module> findAllModulesForCourse(@PathVariable("cid") int cid) {
		Optional<Course> data = courseRepository.findById(cid);
		if(data.isPresent()) {
			Course course = data.get();
			return course.getModules();
		}
		return null;	
	}
}
