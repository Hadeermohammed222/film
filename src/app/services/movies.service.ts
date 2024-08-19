import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {

   }
  
 
  getTrending(mediaType:string):Observable<any>
  {
      return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=83766231029e533e457ea7ea4aa8d133`);
  }
  getSimilar(id:number,mediaType:string):Observable<any>
  {
      return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${mediaType}/${id}/similar?api_key=83766231029e533e457ea7ea4aa8d133`);
  }
  getItemDetails(mediaType:string,id:number):Observable<any>
  {
      return  this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=83766231029e533e457ea7ea4aa8d133`);
  }
  
  getTv(): Observable<any> {
    return this._HttpClient.get<any>(`https://api.themoviedb.org/3/discover/tv?api_key=83766231029e533e457ea7ea4aa8d133`);
  }
  getMovies(): Observable<any> {
    return this._HttpClient.get<any>(`https://api.themoviedb.org/3/discover/movie?api_key=83766231029e533e457ea7ea4aa8d133`);
  }
}
