package com.example.webdev.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.models.Module;
import com.example.webdev.repositories.ModuleRepository;

@RestController
public class ModuleService {
	@Autowired
	ModuleRepository moduleRepository;	
	@GetMapping("/api/module")
	public List<Module> findAllModules() {
		return (List<Module>) moduleRepository.findAll(); 
	}
	
	@PostMapping("/api/course/{cid}/module")
	public Module createModule(@PathVariable("cid") int id, @RequestBody Module module) {
			return moduleRepository.save(module);
	}
	
	@DeleteMapping("/api/module/{moduleId}")
	public void deleteModule(@PathVariable("moduleId") int id) {
		moduleRepository.deleteById(id);
	}
	
	@GetMapping("/api/course/{cid}/module")
	public List<Module> findAllModulesForCourse(@PathVariable("cid") int id) {
		return moduleRepository.findAllModulesForCourse(id);
	}
}
