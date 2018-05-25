package com.example.webdev.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("paragraph")
public class Paragraph extends Widget {

}
