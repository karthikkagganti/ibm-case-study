import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Login} from '../model/login.model'
import { UserService } from '../services/users/users.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class LoginComponent implements OnInit {

  id:String;
  user!:User;
  registerForm= new FormGroup({
    email:new FormControl(''),
    name: new FormControl(''),
    mobno: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
  })
  constructor(private route:ActivatedRoute,
    private userService:UserService,private cookie:CookieService, private router: Router) { }

  ngOnInit(): void {
    this.user= new User;
    }
  submit(): void{
    console.log(this.registerForm.value);
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    this.user.name= this.registerForm.value.name;
    this.user.mobno = this.registerForm.value.mobno;
    this.user.address = this.registerForm.value.address;

    console.log(this.registerForm.value);
    this.userService.createUser(this.user)
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