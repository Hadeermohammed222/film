import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent} from './component/footer/footer.component';
import {NavComponent} from './component/nav/nav.component';
import {HomeComponent}from './component/home/home.component';
import {MoviesComponent} from './component/movies/movies.component';
import {TvComponent} from './component/tv/tv.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {NotfoundComponent} from './component/notfound/notfound.component';
import {PeopleComponent} from './component/people/people.component';
import {AboutComponent} from './component/about/about.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
 {path:'home',component:HomeComponent},
//  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
 {path:'movies',component:MoviesComponent},
 {path:'tv',component:TvComponent},
//  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'moviedetails/:id/:data_type',component:MovieDetailsComponent},
 {path:'',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
