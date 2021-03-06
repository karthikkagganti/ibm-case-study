import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private baseUrl = 'http://localhost:8880/phones';
  private baseUrlSearch = 'http://localhost:8880/phones/search'; 
  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAllPhonesBySearchTerm(term: string): Observable<any>{
    return this.http.get(`${this.baseUrlSearch}/${term}`);
    // return this.getAll().filter(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getPhoneById(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPhone(phone: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, phone);
  }

}
