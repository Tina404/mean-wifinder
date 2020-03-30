import { Component, OnInit } from '@angular/core';
import { WifinderDataService } from '../wifinder-data.service';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private wifinderDataService: WifinderDataService) { }

  public locations: Location[];

  private getLocations(): void {
    this.wifinderDataService
      .getLocations()
      .then(foundLocations => this.locations = foundLocations);
  }

  ngOnInit() {
    this.getLocations();
  }

}
