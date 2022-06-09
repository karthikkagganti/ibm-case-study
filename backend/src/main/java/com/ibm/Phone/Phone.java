package com.ibm.Phone;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ForeignKey;

import com.ibm.Category.Category;

@Entity
public class Phone {
	
	@Id
	private String id;
	private String name;
	private String description;
	private double price;
	private boolean available;
	private int stock;
	
	
@ManyToOne
private Category category;
	

	public Phone() {
			}
	
	public Phone(String id, String name, String description, double price, boolean available, int stock,
			String categoryId) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.available = available;
		this.stock = stock;
		this.category = new Category(categoryId,"","");
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Category getTopic() {
		return category;
	}

	public void setTopic(Category topic) {
		this.category = topic;
	}
	
	
}
