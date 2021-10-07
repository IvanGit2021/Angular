import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: any;
  location: string = 'Porto';
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherByCity('Porto');
  }

  getWeatherByCity(city: string) {
    this.weatherservice.getWeatherByCity(city).subscribe((data) => {
      this.weather = data;
      console.log(this.weather);
    });
  }
}
