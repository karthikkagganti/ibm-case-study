import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  phones: Observable<Phone[]>;
  constructor(private phoneService:  PhoneService, private router: Router) {
  }
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.phones = this.phoneService.getAll();
  }

  phoneDetails(id: string) {
    this.router.navigate(['details', id]);
  }
}
