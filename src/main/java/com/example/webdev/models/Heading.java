package com.example.webdev.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("heading")
public class Heading extends Widget {
	private int size;

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}
}
