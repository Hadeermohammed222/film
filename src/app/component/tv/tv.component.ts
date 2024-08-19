// import { Component, OnInit } from '@angular/core';
// import { MoviesService } from 'src/app/services/movies.service';
// @Component({
//   selector: 'app-tv',
//   templateUrl: './tv.component.html',
//   styleUrls: ['./tv.component.css']
// })
// export class TvComponent implements OnInit {
//   tv:any;
//   constructor(private _Movieservices:MoviesService) { }

//   ngOnInit(): void {
//     this._Movieservices.getMovies().subscribe({
//       next:(data:any)=>{
//         this.tv= data.results;
//         console.log(this.tv);
//       }
//     })
//   }

// }
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  tv: any[] = [];            // Array to hold TV shows
  currentPage: number = 1;    // Current page number
  totalPages: number = 1;     // Total number of pages
  pages: number[] = [];       // Array to store page numbers for pagination

  constructor(private _Movieservices: MoviesService) { }

  ngOnInit(): void {
    this._Movieservices.getTv().subscribe({
      next: (data: any) => {
        this.tv = data.results;   
      },
      error: (err: any) => {
        console.error('Error fetching TV shows:', err); // Handle errors
      }
    });
  } 
}

