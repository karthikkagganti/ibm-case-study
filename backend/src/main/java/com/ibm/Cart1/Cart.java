package com.ibm.Cart1;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.ibm.Phone.Phone;

@Entity
public class Cart {

	@Id
	private int id;
	private String name;
	private int quantity;
	
	@ManyToOne
	private Phone phone;
	
	public Cart() {
		
	}

	public Cart(int id,String name, int quantity, String phoneId) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		//this.phone = new Phone(phoneId, "", "",0.0, true,0,"");
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getTotal() {
		return quantity;
	}

	public void setTotal(int total) {
		this.quantity = total;
	}

	public Phone getPhone() {
		return phone;
	}

	public void setPhone(Phone phone) {
		this.phone = phone;
	}
	
}
