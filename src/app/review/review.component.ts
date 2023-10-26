import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  ratings = [
    {
      id: 1,
      value: 5,
      stars: [1, 1, 1, 1, 1],
      review: "I liked the functionality and comfort of the car. Special thanks to the professionally provided support service. I will apply again.",
      reviewer: "Kate Peterson",
      product: "Range Rover"
    },
    {
      id: 2,
      value: 4,
      stars: [1, 1, 1, 1, 0],
      review: "The car is very spacious and comfortable. The engine is powerful and smooth. The only drawback is the high fuel consumption.",
      reviewer: "John Smith",
      product: "Range Rover"
    },
    {
      id: 3,
      value: 3,
      stars: [1, 1, 1, 0, 0],
      review: "The car is good for long trips, but not very practical for city driving. The navigation system is outdated and sometimes inaccurate.",
      reviewer: "Mary Jones",
      product: "Range Rover"
    }
  ];

  // Define variables for the current rating, review, reviewer and product
  currentRating = 1;
  currentReview = this.ratings[0].review;
  currentReviewer = this.ratings[0].reviewer;
  currentProduct = this.ratings[0].product;

  // Define a constructor
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentRating++;
      if (this.currentRating > this.ratings.length) {
        this.currentRating = 1;
      }
      let rating = this.ratings.find(r => r.id === this.currentRating);
      this.currentReview = rating!.review;
      this.currentReviewer = rating!.reviewer;
      this.currentProduct = rating!.product;
    }, 5000);
  }
}

