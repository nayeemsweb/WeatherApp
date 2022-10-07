import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) : Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', 'beeeb57d4c66323cb0267395e3a64f51')
      .set('units', 'metric')
    })
  }
}
