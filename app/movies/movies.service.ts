import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from '../Models/search.model.';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey : string = environment.apiKey  //ir buscar as variaveis que estao no environment
  private omdbapiUrl : string = environment.omdbapiUrl

  constructor(private http: HttpClient) { }

  getMovies(search: string): Observable<Search> {
    return this.http.get<Search>(`${this.omdbapiUrl}?apikey=${this.apiKey}&s=${search}`)

  }
}
