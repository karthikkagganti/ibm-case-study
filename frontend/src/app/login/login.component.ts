import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Login} from '../model/login.model'
import { UserService } from '../services/users/users.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:String;
  user!:Login;
  loginForm= new FormGroup({
    email:new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private route:ActivatedRoute,
    private userService:UserService,private cookie:CookieService, private router: Router) { }

  ngOnInit(): void {
    this.user= new Login;
    }
  submit(): void{
    console.log(this.loginForm.value);
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    console.log(this.loginForm.value);
    this.userService.checkUser(this.user)
    .subscribe(data => {
      console.log(data);
      localStorage.setItem("authenticated","true");
      if(data){
        this.router.navigateByUrl("/home");
      }
      else{
        alert("wrong credentials");
      }
    }, error => console.log(error));
  }
}

/*
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
*/
