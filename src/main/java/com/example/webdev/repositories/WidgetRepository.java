package com.example.webdev.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.webdev.models.Widget;
import com.example.webdev.models.User;

public interface WidgetRepository extends CrudRepository<Widget, Integer>{

}
