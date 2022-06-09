package com.ibm.Category;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<Category> getAllCategories(){
		// return topics;
		List<Category> topics = new ArrayList<>();
		categoryRepository.findAll()
		.forEach(topics::add);
		return topics;
	}
	
	public Category getCategory(String id) {
//		return topics.stream().filter(t-> t.getId().equals(id)).findFirst().get();
		return categoryRepository.findById(id).orElse(null);
		
	}
	
	public void addCategory(Category category) {
		categoryRepository.save(category);
	}
	
	public void updateCategory(Category category, String id) {
		categoryRepository.save(category);
		// .save can do both add and save
	}
	
	public void deleteCategory(String id) {
		categoryRepository.deleteById(id);
	}
}
