import { Component, OnInit, Input } from '@angular/core';

import { Location } from '../home-list/home-list.component';
import { WifinderDataService } from '../wifinder-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  public formVisible: boolean = false;
  public formError: string;

  @Input() location: Location;
  
  constructor(private wifinderDataService: WifinderDataService) { }

  ngOnInit() {
  }

  public newReview = {
    author: '',
    rating: 5,
    reviewText: ''
  }

  public onReviewSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log(this.newReview);
      this.wifinderDataService
        .addReviewByLocationId(this.location._id, this.newReview)
        .then(review => {
          console.log('Review saved', review);
          
          let reviews = this.location.reviews.slice(0);
          reviews.unshift(review);
          this.location.reviews = reviews;

          this.resetAndHideReviewForm();
        })
    } else {
      this.formError = "All fields required, please try again!";
    }
    
  }

  private formIsValid(): boolean {
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;

    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }
}
