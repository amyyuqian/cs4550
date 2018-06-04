package com.example.webdev.models;

import javax.persistence.Entity;

@Entity
public class TrueFalseQuestion extends Question {
	private boolean isTrue;
	public boolean getIsTrue() {
		return isTrue;
	}
	public void setTrue(boolean isTrue) {
		this.isTrue = isTrue;
	}
}