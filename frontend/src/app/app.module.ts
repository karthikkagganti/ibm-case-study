import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
<<<<<<< HEAD
<<<<<<< HEAD
import { CommonModule } from '@angular/common';  
=======
import { CheckoutComponent } from './checkout/checkout.component';
>>>>>>> a6e3af6c2a79f7cabe57afd2041c28277780b0af
=======
import { CheckoutComponent } from './checkout/checkout.component';
>>>>>>> a6e3af6c2a79f7cabe57afd2041c28277780b0af

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartPageComponent,
    HomeComponent,
    PhoneComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    AdminComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
ReactiveFormsModule,
CommonModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
