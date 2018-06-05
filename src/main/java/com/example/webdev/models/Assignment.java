package com.example.webdev.models;

import javax.persistence.Entity;

@Entity
public class Assignment extends Widget {
	private String title;
	private int points;

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
