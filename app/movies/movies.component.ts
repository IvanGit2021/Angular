import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie.model';
import { Search } from '../Models/search.model.';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: Movie[] = []
  search:string=""

  constructor(private moviesservice: MoviesService) { }

  ngOnInit(): void {

    this.getMovies('');
    console.log(this.movies)

  }
  getMovies(search: string) {

    this.moviesservice
    .getMovies(search)
    .subscribe((data:Search) => {
      this.movies = data.Search

    } )
  }
}
