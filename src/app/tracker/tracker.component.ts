import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

 covidData:Object;
  constructor(private covidService:CovidService) { }

 ngOnInit() {
    this.covidService.getCovidData().subscribe(data => {
        this.covidData = data
        console.log(this.covidData);
      }
    );
  }

}
