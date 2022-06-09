package com.ibm.Category;

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

@RestController
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@GetMapping("/categories")
	public List<Category> getAllCategories() {
		return categoryService.getAllCategories();
	}

	@GetMapping("/categories/{id}")
	public Category getCategory(@PathVariable String id) {
		return categoryService.getCategory(id);
	}

	@PostMapping("/categories")
	public void addCategory(@RequestBody Category topic) {
		categoryService.addCategory(topic);
	}

	@PutMapping("/categories/{id}")
	public void updateCategory(@RequestBody Category topic, @PathVariable String id) {
		categoryService.updateCategory(topic, id);
	}
	
	@DeleteMapping("/categories/{id}")
	public void deleteCategory(@PathVariable String id) {
		categoryService.deleteCategory(id);
	}

}
