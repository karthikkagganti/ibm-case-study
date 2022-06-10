import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent },
  {path: 'phone/:id', component:PhoneComponent},
  {path:'cart-page', component:CartPageComponent},
  {path :'', redirectTo : '/home', pathMatch : 'full'},
  {path:'**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
