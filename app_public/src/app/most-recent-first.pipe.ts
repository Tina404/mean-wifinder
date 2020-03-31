import { Pipe, PipeTransform } from '@angular/core';
import { Review } from './location';

@Pipe({
  name: 'mostRecentFirst'
})
export class MostRecentFirstPipe implements PipeTransform {
  private compare(a, b) {
    let comparison = 1;
    if (a.createdOn > b.createdOn) {
      comparison = -1;
    }
    return comparison;
  }
  transform(reviews: Review[]): Review[] {
    if (reviews && reviews.length > 0) {
      return reviews.sort(this.compare);
    }
    return null;
  }

}
