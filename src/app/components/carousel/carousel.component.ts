import { Component, Input } from '@angular/core';
import { apiBaseUrl } from '../../data/api-config';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: string[]|undefined;
  currentImageIndex = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images!.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images!.length) % this.images!.length;
  }
  protected readonly apiBaseUrl = apiBaseUrl;
}