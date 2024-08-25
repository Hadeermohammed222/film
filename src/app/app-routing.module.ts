// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import {FooterComponent} from './component/footer/footer.component';
// import {NavComponent} from './component/nav/nav.component';
// import {HomeComponent}from './component/home/home.component';
// import {MoviesComponent} from './component/movies/movies.component';
// import {TvComponent} from './component/tv/tv.component';
// import {LoginComponent} from './component/login/login.component';
// import {RegisterComponent} from './component/register/register.component';
// import {NotfoundComponent} from './component/notfound/notfound.component';
// import {PeopleComponent} from './component/people/people.component';
// import {AboutComponent} from './component/about/about.component';
// import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
// import { AuthGuard } from './auth.guard';


// const routes: Routes = [
//  {path:'home',component:HomeComponent},
// //  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
//  {path:'movies',component:MoviesComponent},
//  {path:'tv',component:TvComponent},
// //  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
//  {path:'login',component:LoginComponent},
//  {path:'register',component:RegisterComponent},
//  {path:'moviedetails/:id/:data_type',component:MovieDetailsComponent},
//  {path:'',component:RegisterComponent},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })

// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from '../app/component/home/home.component';
import { AboutComponent } from '../app/component/about/about.component';
import { MoviesComponent } from '../app/component/movies/movies.component';
import { TvComponent } from '../app/component/tv/tv.component';
import { PeopleComponent } from '../app/component/people/people.component';
import { LoginComponent } from '../app/component/login/login.component';
import { RegisterComponent } from '../app/component/register/register.component';
import { MovieDetailsComponent } from '../app/component/movie-details/movie-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'tv', component: TvComponent, canActivate: [AuthGuard] },
  { path: 'people', component: PeopleComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'moviedetails/:id/:data_type', component: MovieDetailsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
