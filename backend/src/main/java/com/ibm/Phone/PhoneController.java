package com.ibm.Phone;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PhoneController {

	@Autowired
	private PhoneService phoneService;

	@GetMapping("/phones")
	public List<Phone> getAllPhones() {
		return phoneService.getAllPhones();
	}

	@GetMapping("/phones/{id}")
	public Phone getPhone(@PathVariable String id) {
		return phoneService.getPhone(id);
	}

	@PostMapping("/phones")
	public void addPhone(@RequestBody Phone phone) {
		phoneService.addPhone(phone);
	}

	@PutMapping("/phones/{id}")
	public void updatePhone(@RequestBody Phone phone) {
		phoneService.updatePhone(phone);
	}
	
	@DeleteMapping("/phones/{id}")
	public void deletePhone(@PathVariable String id) {
		phoneService.deletePhone(id);
	}

}
