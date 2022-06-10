import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartQuantity = 0;
  searchTerm = '';
  constructor(cartService:CartService ,activatedRoute:ActivatedRoute,private router:Router) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
   }

  ngOnInit(): void {
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }
}
