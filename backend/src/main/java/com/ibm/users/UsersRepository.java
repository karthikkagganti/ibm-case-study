package com.ibm.users;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder.In;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.Phone.Phone;


public interface UsersRepository extends JpaRepository<Users, String>{
	Users findByNameLikeIgnoreCase(String name);
}