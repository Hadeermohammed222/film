import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TvComponent } from './component/tv/tv.component';
import { PeopleComponent } from './component/people/people.component';
import { MoviesComponent } from './component/movies/movies.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AboutComponent } from './component/about/about.component';
import { MediaItemComponent } from './component/media-item/media-item.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { WatchPipe } from './watch.pipe';
import { SearchPipe } from './search.pipe';


@NgModule
({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TvComponent,
    PeopleComponent,
    MoviesComponent,
    NotfoundComponent,
    AboutComponent,
    MediaItemComponent,
    MovieDetailsComponent,
    WatchPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
