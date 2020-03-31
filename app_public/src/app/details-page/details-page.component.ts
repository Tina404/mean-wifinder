import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Location } from '../home-list/home-list.component';

import { WifinderDataService } from '../wifinder-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private wifinderDataService: WifinderDataService,
    private route: ActivatedRoute
  ) { }

  newLocation: Location;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('locationId');
          return this.wifinderDataService.getLocationById(id);
        })
      )
      .subscribe((newLocation: Location) => {
        this.newLocation = newLocation;
        this.pageContent.header.title = newLocation.name;
        this.pageContent.sidebar =  newLocation.name + this.pageContent.sidebar;
      });
  }

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
    sidebar: ' is on Wifinder because it has accessible wifi and space to site down with your laptop and get some work done.\n\nIf you\'ve been here, please leave a review, thanks!'
  };
}
