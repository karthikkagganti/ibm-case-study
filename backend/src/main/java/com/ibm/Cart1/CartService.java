package com.ibm.Cart1;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.Category.CategoryRepository;
import com.ibm.Phone.Phone;
import com.ibm.Phone.PhoneService;


@Service
public class CartService {

	@Autowired
	private CartRepository cartRepository;
	
	
	public void addToCart(Cart cart){
		cartRepository.save(cart);
	}

	public List<Cart> getAllCart() {
		// TODO Auto-generated method stub
		List<Cart> cart = new ArrayList<>();
		cartRepository.findAll()
		.forEach(cart::add);
		return cart;
	}
}
