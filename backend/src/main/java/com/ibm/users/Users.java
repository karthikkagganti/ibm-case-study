package com.ibm.users;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {
	
	@Id
	private String email;
//	@Column(length = 20)
	private String name;
//	@Column(length = 20)
	private String mobno;
public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	//	@Column(length = 20)
	private String password;
	private String address;
	
	//Getters and Setters
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String fullname) {
		this.name = fullname;
	}
	public String getMobno() {
		return mobno;
	}
	public void setMobno(String mobno) {
		this.mobno = mobno;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
