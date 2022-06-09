package com.ibm.Phone;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.Category.Category;

@RestController
public class PhoneController {

	@Autowired
	private PhoneService phoneService;

	@GetMapping("/categories/{id}/phones")
	public List<Phone> getAllPhones(@PathVariable String id) {
		return phoneService.getAllPhones(id);
	}

	@GetMapping("/categories/{categoryId}/phones/{id}")
	public Phone getPhone(@PathVariable String id) {
		return phoneService.getPhone(id);
	}

	@PostMapping("/categories/{categoryId}/phones")
	public void addPhone(@RequestBody Phone phone, @PathVariable String categoryId) {
		phone.setTopic(new Category(categoryId,"",""));
		phoneService.addPhone(phone);
	}

	@PutMapping("/categories/{categoryId}/phones/{id}")
	public void updatePhone(@RequestBody Phone phone, @PathVariable String categoryId) {
		phone.setTopic(new Category(categoryId,"",""));
		phoneService.updatePhone(phone);
	}
	
	@DeleteMapping("/categories/{categoryId}/phones/{id}")
	public void deletePhone(@PathVariable String id) {
		phoneService.deletePhone(id);
	}

}
