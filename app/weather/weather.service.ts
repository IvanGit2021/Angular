import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  city: string = '';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string) {
    return this.http.get(
      `${this.apiUrl}/${city}?unitGroup=metric&key=${this.apiKey}`
    );
  }
}
