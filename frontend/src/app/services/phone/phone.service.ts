import { Injectable } from '@angular/core';
import { Phone } from 'src/app/model/phone.model';
import { sample_phones } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }

  getAll(): Phone[] {
    return sample_phones;
  }

  getAllPhonesBySearchTerm(searchTerm: string) {
    return this.getAll().filter(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getPhoneById(phoneId:string):Phone{
    return this.getAll().find(phone => phone.id == phoneId) ?? new Phone();
  }
}
