import { createInjectableType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _MovesService:MoviesService) { }
 trendingMovies:any[]=[];
 trendingTv:any[]=[];
 trendingPeople:any[]=[]; 
 term:any= ' ';
  ngOnInit(): void {
    this._MovesService.getTrending('movie').subscribe({
     next:(data)=> {this.trendingMovies = data.results.slice(0,10);
         console.log(this.trendingMovies);
     }
    })     
    this._MovesService.getTrending('tv').subscribe({
     next:(data)=>{this.trendingTv = data.results.slice(0,10);
        console.log(this.trendingTv);
     }
    })     
    this._MovesService.getTrending('person').subscribe({
     next:(data)=>{this.trendingPeople = data.results.filter((item:any)=> item.profile_path !== null).slice(0,10);
      console.log(this.trendingPeople);
     }
    })     
    
    }
  

}
