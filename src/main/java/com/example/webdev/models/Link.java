package com.example.webdev.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("link")
public class Link extends Widget {
	private String href;

	public String getHref() {
		return href;
	}

	public void setHref(String href) {
		this.href = href;
	}
	
}
