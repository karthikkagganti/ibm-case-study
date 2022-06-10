import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart.model';
import { CartItem } from 'src/app/model/CartItems.model';
import { Phone } from 'src/app/model/phone.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(phone: Phone): void {
    let cartItem = this.cart.items
      .find(item => item.phone.id === phone.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(phone));
    this.setCartToLocalStorage();
  }

  removeFromCart(phoneId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.phone.id != phoneId);
    this.setCartToLocalStorage();
  }

  changeQuantity(phoneId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.phone.id === phoneId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.phone.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
