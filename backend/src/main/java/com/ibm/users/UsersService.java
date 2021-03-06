package com.ibm.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService{

	
	@Autowired
	private UsersRepository repo;
	
	public boolean save(Users users) {
		repo.save(users);
		return true;
	}
	public boolean editUser(Users users) {
		repo.save(users);
		return true;
	}

	public Users fetch(String email) {
		return repo.findById(email).get();
	}

	public List<Users> list() {
		return repo.findAll();
	}

	public boolean checkuser(String email) {
		return repo.existsById(email);
	}

	public void delete(String email) {
		repo.deleteById(email);
	}

	public boolean checklogin(String email, String password) {
		if (checkuser(email)) {
			Users users = fetch(email);
			if(users.getPassword().equals(password)) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}	}

	public Users getUser(String email) {
		// TODO Auto-generated method stub
		return repo.findById(email).get();
		
	}

	public Users addAddress(Users users) {
		// TODO Auto-generated method stub
		repo.save(users);
		return repo.findById(users.getEmail()).get();
	}
	
	public Users getUsersName(String name) {
		return repo.findByNameLikeIgnoreCase(name);
	}

}

