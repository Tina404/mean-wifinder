import { Component, OnInit } from '@angular/core';

import { WifinderDataService } from '../wifinder-data.service';
import { GeolocationService } from '../geolocation.service';
import { Location } from '../location';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(
    private wifinderDataService: WifinderDataService,
    private geoLocationService: GeolocationService
  ) { }

  public locations: Location[];

  public message: string;

  ngOnInit() {
    this.getPosition();
  }

  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geoLocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    // console.log('lat: ' + lat);
    // console.log('lng: ' + lng);
    this.wifinderDataService
      .getLocations(lat, lng)
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' : 'No locations found';
        this.locations = foundLocations;
      });
  }

  private showError(error: any): void {
    this.message = error.message;
  }

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser';
  }

}
