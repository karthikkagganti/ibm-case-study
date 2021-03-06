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

  id: string;
  phone!: Phone;
  constructor(private route:ActivatedRoute,private phoneService: PhoneService,
    private cartService:CartService, private router: Router) {
      
    }

  ngOnInit(): void {

    this.phone = new Phone;

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.phoneService.getPhoneById(this.id)
    .subscribe(data => {
      console.log(data);
      this.phone = data;
    }, error => console.log(error));
  }

  addToCart(){
    this.cartService.addToCart(this.phone);
    this.router.navigateByUrl('/cart-page');
  }
}
