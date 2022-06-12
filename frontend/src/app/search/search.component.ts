import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone/phone.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term!: string;
  phones: Observable<Phone[]>;
  phone!: Phone;
  constructor(private phoneService:  PhoneService, private route:ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    let url = this.route.snapshot.url.join().split(',');
    this.term = url[2];
    console.log(url[2]); 
    this.reloadData();
  }

  reloadData() {
    this.phones = this.phoneService.getAllPhonesBySearchTerm(this.term);
  }

  phoneDetails(id: string) {
    this.router.navigate(['details', id]);
  }

}
