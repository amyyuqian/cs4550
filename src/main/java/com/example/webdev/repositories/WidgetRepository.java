package com.example.webdev.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdev.models.Widget;

public interface WidgetRepository extends CrudRepository<Widget, Integer>{

}
