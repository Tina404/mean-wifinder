import { Component, OnInit, Input } from '@angular/core';

import { Location } from '../home-list/home-list.component';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  public formVisible: boolean = false;
  
  @Input() location: Location;
  
  constructor() { }

  ngOnInit() {
  }

  public newReview = {
    author: '',
    rating: 5,
    reviewText: ''
  }

}
