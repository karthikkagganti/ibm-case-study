package com.ibm.Cart1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.Phone.Phone;

@RestController
public class CartController {

	@Autowired
	private CartService cartService;
	
	@PostMapping("/categories/{categoryId}/phones/{id}/cart")
	public void addToCart(@RequestBody Cart cart, @PathVariable String id) {
		//cart.setPhone(new Phone(id,"","",0.0,true,0,""));
		cartService.addToCart(cart);
	}
	
	@GetMapping("/cart")
	public List<Cart> getCart() {
		return cartService.getAllCart();
	}
	
	
}
