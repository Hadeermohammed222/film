import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl:string = 'https://json-server-i34d.vercel.app/SignUp';

  private isLoggedIn = false;
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

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
} 
