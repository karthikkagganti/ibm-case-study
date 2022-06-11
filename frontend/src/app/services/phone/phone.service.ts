import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private baseUrl = 'http://localhost:8880/phones';  
  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'phones');  ;
  }

  getAllPhonesBySearchTerm(searchTerm: string) {
    return this.http.get(`${this.baseUrl}`);
    // return this.getAll().filter(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getPhoneById(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getPhonesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
