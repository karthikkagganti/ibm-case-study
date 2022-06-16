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
   }
   get auth(): any{
    return localStorage.getItem('curruser');
  }
  ngOnInit(): void {
  }
  search(term:string):void{
    if(term)
    this.router.navigate(['/phones/search', term]);
  }
  readLocalStorageValue(key:any):any {
    return localStorage.getItem(key);
}
logout(){
  localStorage.setItem("authenticated","false");
  localStorage.setItem("curruser","");
  localStorage.setItem("curremail","");
}
}
