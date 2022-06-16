package com.ibm.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.ibm.entity.Admin;
//import com.ibm.repo.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository repo;

	public boolean checkadmin(Admin a) {
		if (repo.existsById(a.getAdminid())) {
			Admin currentadmin = repo.findById(a.getAdminid()).get();
			if (currentadmin.getPassword().equals(a.getPassword())) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}

	public String save(Admin a) {
		repo.save(a);
		return a.getAdminid();
	}
	
}
