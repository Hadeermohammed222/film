import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl:string = 'http://localhost:3005/SignUp';

  constructor(private http:HttpClient) { }
  signUp(data:string):Observable<any>{
      return this.http.post(this.baseUrl,data);
  }
  signIn(data:string):Observable<any>{
      return this.http.post(this.baseUrl,data);
  }
  getUsers():Observable<any>{
    return this.http.get(this.baseUrl);
  }
  
} 
