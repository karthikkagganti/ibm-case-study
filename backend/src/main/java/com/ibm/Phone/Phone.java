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
	private String imageUrl;
	private boolean available;
	private int stock;
	
	
@ManyToOne
private Category category;
	

	public Phone() {
			}
	
	public Phone(String id, String name, String description, double price,String imageUrl, boolean available, int stock) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.setPrice(price);
		this.imageUrl = imageUrl;
		this.setAvailable(available);
		this.setStock(stock);
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

	public void setTopic(Category topic) {
		this.category = topic;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	
}
