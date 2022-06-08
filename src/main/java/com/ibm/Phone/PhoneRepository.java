package com.ibm.Phone;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PhoneRepository extends CrudRepository<Phone, String>{

	public List<Phone> findByCategoryId(String categoryId);
	
}
