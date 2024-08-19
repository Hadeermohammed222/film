import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  data:any;
  
  constructor(private _AuthService:AuthService,private _Router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._AuthService.getUsers().subscribe((res:any)=>{
      res = this.data;
    })
    if(this.data){
        return true;
    }
    else{
      this._Router.navigate(['/register']);
       return false;
    }
  }
  
}
