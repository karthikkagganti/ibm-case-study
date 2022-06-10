import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  phones: Phone[] = [];
  constructor(private phoneService:  PhoneService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.phones = this.phoneService.getAllPhonesBySearchTerm(params['searchTerm']);
      else
        this.phones = phoneService.getAll();
    })
  }
  ngOnInit(): void {
  }

}
