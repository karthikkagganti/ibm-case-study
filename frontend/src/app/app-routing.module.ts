import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalComponent } from './final/final.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import {EditPageComponent} from './edit-page/edit-page.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'phones/search/:searchTerm', component: SearchComponent },
  {path: 'phones/:id', component:PhoneComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'admin', component:AdminComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'edit-page', component:EditPageComponent},
  {path:'profile', component:ProfileComponent},
  {path:'thankyou', component:FinalComponent},
  {path :'', redirectTo : '/home', pathMatch : 'full'},
  {path:'**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
