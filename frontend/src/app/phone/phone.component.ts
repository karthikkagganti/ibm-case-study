import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone/phone.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  phone!: Phone;
  constructor(activatedRoute:ActivatedRoute, phoneService: PhoneService,
    private cartService:CartService, private router: Router) {
      activatedRoute.params.subscribe((params) => {
        if(params['id'])
        this.phone = phoneService.getPhoneById(params['id']);
      })
    }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.phone);
    this.router.navigateByUrl('/cart-page');
  }
}
