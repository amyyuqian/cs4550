package com.example.webdev.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("image")
public class Image extends Widget {
	private String src;

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}
}
