package com.ibm.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200/login")
@RestController
public class AdminController {
	@Autowired
	private AdminService service;
	
	@PostMapping("/addAdmin")
	public String add(@RequestBody Admin a) {
		String c = service.save(a);
		return "Admin signed in with id: "+c;
	}

	@PostMapping("/admin")
	public ResponseEntity<Boolean> checkadmin(@RequestBody Admin admin){
		return new ResponseEntity<Boolean> (service.checkadmin(admin),HttpStatus.OK);
	}
}