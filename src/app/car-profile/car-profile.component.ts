// car-profile.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit {
  currentImage = "assets/images/1.jpg";
  images = ["assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg"];
  currentIndex = 0;
  interval: any;

  constructor() {}

  ngOnInit() {
    this.startInterval();
  }

  showImage(image: string) {
    this.stopInterval();
    this.currentImage = image;
    this.currentIndex = this.images.indexOf(image);
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.currentImage = this.images[this.currentIndex];
    }, 5000);
  }

  stopInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
