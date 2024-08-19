import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
 itemDetails:any;
 film:any;
 similarMovies:any[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _Movieservices:MoviesService) { 
  }

  ngOnInit(): void {

    let {data_type,id} = this._ActivatedRoute.snapshot.params;
    this._Movieservices.getItemDetails(data_type,id).subscribe({
      next:(data)=>{
        this.itemDetails = data;
      }
    })

    this._Movieservices.getSimilar(data_type,id).subscribe({
      next:(data:any)=>{
        this.similarMovies= data.results;
      }
    })

    // this._Movieservices.getMovies().subscribe({
    //   next:(data:any)=>{
    //     this.film= data.results;
    //     console.log(this.film);
    //   }
    // })
    
   
  }

}
