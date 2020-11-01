import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }
  getCovidData() {
    return this.http.get('https://api.covidtracking.com/v1/us/daily.json')
  }
 
}
