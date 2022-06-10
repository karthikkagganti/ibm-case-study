import { Phone } from "./phone.model";

export class CartItem{
    constructor(public phone:Phone){ }
    quantity:number = 1 ;
    price: number = this.phone.price;
  }
  