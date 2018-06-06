package com.example.webdev.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.models.EssayQuestion;
import com.example.webdev.models.Exam;
import com.example.webdev.models.FillInTheBlankQuestion;
import com.example.webdev.models.Lesson;
import com.example.webdev.models.MultipleChoiceQuestion;
import com.example.webdev.models.Question;
import com.example.webdev.models.TrueFalseQuestion;
import com.example.webdev.models.Widget;
import com.example.webdev.repositories.EssayQuestionRepository;
import com.example.webdev.repositories.ExamRepository;
import com.example.webdev.repositories.FillInTheBlankQuestionRepository;
import com.example.webdev.repositories.LessonRepository;
import com.example.webdev.repositories.MultipleChoiceQuestionRepository;
import com.example.webdev.repositories.TrueFalseQuestionRepository;

@RestController
@CrossOrigin(origins = "*")
public class ExamService {
	@Autowired
	ExamRepository examRepository;
	@Autowired
	TrueFalseQuestionRepository trueFalseRepo;
	@Autowired
	MultipleChoiceQuestionRepository multiRepo;
	@Autowired
	FillInTheBlankQuestionRepository blanksRepo;
	@Autowired
	LessonRepository lRepo;
	@Autowired
	EssayQuestionRepository essayRepo;
	
	@GetMapping("/api/exam")
	public List<Exam> findAllExams() {
		return (List<Exam>) examRepository.findAll();
	}
	
	@GetMapping("/api/exam/{id}")
	public Exam findExamById(@PathVariable("id") int id) {
		Optional<Exam> data = examRepository.findById(id);
		if (data.isPresent()) {
			return data.get();
		}
		return null;
	}
	
	@PostMapping("/api/lesson/{:lid}/exam")
	public Exam createExam(@PathVariable("lid") int lid, @RequestBody Exam body) {
		Optional<Lesson> data = lRepo.findById(lid);
		
		if (data.isPresent()) {
			Lesson l = data.get();
			body.setLesson(l);
			return examRepository.save(body);
		}
		return null;
	}
	
	@DeleteMapping("/api/exam/{id}")
	public void deleteExam(@PathVariable("id") int id) {
		examRepository.deleteById(id);
	}
	
	@PostMapping("/api/exam/{eid}/essay")
	public EssayQuestion createEssayQuestion(@PathVariable("eid") int eid,
			@RequestBody EssayQuestion body) {
		Optional<Exam> data = examRepository.findById(eid);
		
		if (data.isPresent()) {
			body.setExam(data.get());
			return essayRepo.save(body);
		}
		return null;
	}
	
	@PostMapping("/api/exam/{eid}/multi")
	public MultipleChoiceQuestion createMultiQuestion(@PathVariable("eid") int eid,
			@RequestBody MultipleChoiceQuestion body) {
		Optional<Exam> data = examRepository.findById(eid);
		
		if (data.isPresent()) {
			body.setExam(data.get());
			return multiRepo.save(body);
		}
		return null;
	}
	
	@PostMapping("/api/exam/{eid}/blanks")
	public FillInTheBlankQuestion createBlanksQuestion(@PathVariable("eid") int eid,
			@RequestBody FillInTheBlankQuestion body) {
		Optional<Exam> data = examRepository.findById(eid);
		
		if (data.isPresent()) {
			body.setExam(data.get());
			return blanksRepo.save(body);
		}
		return null;
	}
	
	@PostMapping("/api/exam/{eid}/truefalse")
	public TrueFalseQuestion createTrueFalseQuestion(@PathVariable("eid") int eid,
			@RequestBody TrueFalseQuestion body) {
		Optional<Exam> data = examRepository.findById(eid);
		
		if (data.isPresent()) {
			body.setExam(data.get());
			return trueFalseRepo.save(body);
		}
		return null;
	}
	
	@GetMapping("/api/lesson/{lid}/exam")
	public List<Widget> findExamsByLesson(@PathVariable("lid") int lid) {
		Optional<Lesson> data = lRepo.findById(lid);
		
		if (data.isPresent()) {
			Lesson l = data.get();
			return l.getExams();
		}
		return null;
	}

	@GetMapping("/api/multi/{questionId}")
	public MultipleChoiceQuestion findMultiQuestionById(@PathVariable("questionId") int questionId) {
		Optional<MultipleChoiceQuestion> optional = multiRepo.findById(questionId);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	@GetMapping("/api/truefalse/{questionId}")
	public TrueFalseQuestion findTrueFalseQuestionById(@PathVariable("questionId") int questionId) {
		Optional<TrueFalseQuestion> optional = trueFalseRepo.findById(questionId);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@GetMapping("/api/exam/{examId}/question")
	public List<Question> findAllQuestionsForExam(@PathVariable("examId") int examId) {
		Optional<Exam> optionalExam = examRepository.findById(examId);
		if(optionalExam.isPresent()) {
			Exam exam = optionalExam.get();
			List<Question> questions = exam.getQuestions();
			return questions;
		}
		return null;
	}
}
