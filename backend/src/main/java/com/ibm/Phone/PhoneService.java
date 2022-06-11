package com.ibm.Phone;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PhoneService {
	
	@Autowired
	private PhoneRepository phoneRepository;
	
	public List<Phone> getAllPhones(){
		List<Phone> phones = new ArrayList<>();
		phoneRepository.findAll()
		.forEach(phones::add);
		return phones;
	}
	
	public Phone getPhone(String id) {
//		return topics.stream().filter(t-> t.getId().equals(id)).findFirst().get();
		return phoneRepository.findById(id).get();
		
	}
	
	public void addPhone(Phone phone) {
		phoneRepository.save(phone);
	}
	
	public void updatePhone(Phone phone) {
		phoneRepository.save(phone);
		// .save can do both add and save
	}
	
	public void deletePhone(String id) {
		phoneRepository.deleteById(id);
	}
}
