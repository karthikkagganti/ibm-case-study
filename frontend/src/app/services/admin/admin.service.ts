import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8880/admin';
  private baseUrlAdd = 'http://localhost:8880/addAdmin'; 
  constructor(private http:HttpClient) { }

  createAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlAdd}`, admin);
  }

  checkAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, admin);
    // this returns a True or a false based on
    //if the Admin credentials are present in the databse
  }

}
