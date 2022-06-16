import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8880/users';
  private baseUrlSearch = 'http://localhost:8880/users/search'; 
  constructor(private http:HttpClient) { }


  getUser(term: string): Observable<any>{
    return this.http.get(`${this.baseUrlSearch}/${term}`);
  }


  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  checkUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, user);
    // this returns true or false base on if the user credentials are
    //present in the database
  }
}