import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  submit() : void{
    this.cartService.clearCart();
    this.router.navigateByUrl("/thankyou");
  }

}
