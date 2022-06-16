package com.ibm.admin;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.Table;

@Entity
//@Table(name = "admin")
public class Admin {
	
	@Id
//	@Column(unique = true)
	private String adminid;
//	@Column(length = 20)
	private String password;
	
	//Getters and setters
	public String getAdminid() {
		return adminid;
	}
	public void setAdminid(String adminid) {
		this.adminid = adminid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}