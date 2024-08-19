import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
  constructor(private _Movieservices: MoviesService) { }
  ngOnInit(): void {
    this._Movieservices.getMovies().subscribe({
      next: (data: any) => {
        this.movies = data.results;
        console.log(this.movies)
      },
      error: (err: any) => {
        console.error('Error fetching TV shows:', err); // Handle errors
      }
    });
  } 
}
