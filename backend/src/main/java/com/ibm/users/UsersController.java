package com.ibm.users;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin("http://localhost:4200")
@RestController
public class UsersController {
	
	@Autowired
	private UsersService service;

	
	// for showing all the users on the admin page
	@GetMapping("/users")
	public List<Users> list(){
		return service.list();
	}
	
	//for a specific user for the profile page
	@GetMapping("/users/search/{email}")
	public ResponseEntity<Users> get(@PathVariable String email) {
		try {
			Users users =  service.fetch(email);
			return new ResponseEntity<Users>(users,HttpStatus.OK);
		}
		catch(NoSuchElementException e) {
			return new ResponseEntity<Users>(HttpStatus.NOT_FOUND);
		}
	}
	

	//to create a signup for a new User
	@PostMapping(value = "/users/signup")
	public boolean add(@RequestBody Users users ) {
		return service.save(users);
//		return "Added user with Name: "+ users.getFullname();
	}

//for the admin, if he wants to delete a user(not implemented yet)	
	@DeleteMapping("/users/{email}")
	public void delete(@PathVariable String email) {
		service.delete(email);
	}
	
	//for updating the user's profile page
	@PutMapping("users/{email}")
	public ResponseEntity<Users> update(@RequestBody Users users, @PathVariable String email) {
		try {
			Users existUser = service.fetch(email); 
			System.out.print(existUser);
			service.save(users);
			return new ResponseEntity<Users>(HttpStatus.OK);
		}
		catch(NoSuchElementException e) {
			return new ResponseEntity<Users>(HttpStatus.NOT_FOUND); 
		}
	}

	//for the user login page
	@PostMapping("users/login")
	public boolean check(@RequestBody Users users) {
		return service.checklogin(users.getEmail(), users.getPassword());
	}
	
	@PostMapping("/users/{email}/addAddress")
	public Users addAddress(@RequestBody Users users) {
		return service.addAddress(users);
	}
}

