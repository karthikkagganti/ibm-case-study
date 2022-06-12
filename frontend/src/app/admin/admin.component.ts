import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone/phone.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  phone: Phone = new Phone();
  submitted = false;
  constructor(private phoneService: PhoneService, private router: Router) { }

  ngOnInit(): void {
  }

  newPhone(): void {
    this.submitted = false;
    this.phone = new Phone();
  }

  save() {
    this.phoneService
    .createPhone(this.phone).subscribe(data => {
      console.log(data);
      this.phone = new Phone();
      this.goToHome();
    },
    error => console.log(error))
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
