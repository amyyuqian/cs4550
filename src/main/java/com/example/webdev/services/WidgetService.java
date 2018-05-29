package com.example.webdev.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.webdev.models.Course;
import com.example.webdev.models.Heading;
import com.example.webdev.models.Image;
import com.example.webdev.models.Lesson;
import com.example.webdev.models.Link;
import com.example.webdev.models.Module;
import com.example.webdev.models.Widget;
import com.example.webdev.models.List;
import com.example.webdev.repositories.CourseRepository;
import com.example.webdev.repositories.LessonRepository;
import com.example.webdev.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class WidgetService {
	@Autowired
	LessonRepository lessonRepository;
	@Autowired
	WidgetRepository widgetRepository;
	@Autowired
	CourseRepository courseRepository;
	
	@GetMapping("/api/widget")
	public Iterable<Widget> findAllWidgets() {
		return (Iterable<Widget>) widgetRepository.findAll();
	}
	
	@PostMapping("/api/lesson/{lid}/widget")
	public Widget createWidget(@PathVariable("lid") int lid, @RequestBody Widget widget) {
		Optional<Lesson> data = lessonRepository.findById(lid);
		
		if (data.isPresent()) {
			Lesson lesson = data.get();
			widget.setLesson(lesson);
			Course course = lesson.getModule().getCourse();
			course.setModified(new Date());
			return widgetRepository.save(widget);
		}
		return null;
	}
	
	@DeleteMapping("/api/widget/{widgetId}")
	public void deleteWidget(@PathVariable("widgetId") int id) {
		Optional<Widget> data = widgetRepository.findById(id);
		
		if (data.isPresent()) {
			Widget w = data.get();
			Lesson l = w.getLesson();
			Module m = l.getModule();
			Course course = m.getCourse();
			course.setModified(new Date());
		}
		
		widgetRepository.deleteById(id);
	}
	
	@GetMapping("/api/widget/{widgetId}")
	public Widget findWidgetById(@PathVariable("widgetId") int id) {
		Optional<Widget> data = widgetRepository.findById(id);
		
		if (data.isPresent() ) {
			return data.get();
		}
		
		return null;
	}
	
	@GetMapping("/api/lesson/{lid}/widget")
	public Iterable<Widget> findAllWidgetsForLesson(@PathVariable("lid") int lid) {
		Optional<Lesson> data = lessonRepository.findById(lid);
		
		if (data.isPresent()) {
			Lesson l = data.get();
			return l.getWidgets();
		}
		return null;
	}
	
	@PutMapping("/api/widget/{widgetId}")
	public Widget updateWidget(@PathVariable("widgetId") int id, @RequestBody Widget body) {
		Optional<Widget> data = widgetRepository.findById(id);
		
		if (data.isPresent() ) {
			Widget w = data.get();
			w.setClassName(body.getClassName());
			w.setHeight(body.getHeight());
			w.setName(body.getName());
			w.setPosition(body.getPosition());
			w.setStyle(body.getStyle());
			w.setText(body.getText());
			w.setWidth(body.getWidth());
			
			if (w.getClassName() == "image") {
				Image i = (Image) w;
				Image bodyImage = (Image) body;
				i.setSrc(bodyImage.getSrc());
				widgetRepository.save(i);
				return i;
			} else if (w.getClassName() == "link") {
				Link l = (Link) w;
				Link bodyLink = (Link) body;
				l.setHref(bodyLink.getHref());
				widgetRepository.save(l);
				return l;
			} else if (w.getClassName() == "heading") {
				Heading h = (Heading) w;
				Heading bodyHeading = (Heading) body;
				h.setSize(bodyHeading.getSize());
				widgetRepository.save(h);
				return h;
			} else if (w.getClassName() == "list") {
				List li = (List) w;
				List bodyLi = (List) body;
				li.setListItems(bodyLi.getListItems());
				li.setListType(bodyLi.getListType());
				widgetRepository.save(li);
				return li;
			}
			widgetRepository.save(w);
			return w;
		}
		return null;
	}
}
