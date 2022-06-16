import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8880/users';
  private baseUrlSearch = 'http://localhost:8880/users/search';
  private baseUrlProfile='http://localhost:8880/users/profile'; 
  constructor(private http:HttpClient) { }


  getUser(term: String): Observable<any>{
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

  getProfile(term:String):Observable<any>{
    return this.http.get(`${this.baseUrlProfile}/${term}`);
  }

  edituser(term:String, user:Object):Observable<any>{
    return this.http.put(`${this.baseUrl}/${term}`,user);
  }
}