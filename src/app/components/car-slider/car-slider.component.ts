import {AfterViewInit, Component} from '@angular/core';
import Swiper from "swiper";
import {Car} from "../../data/models/car.model";
import {CarService} from "../../data/services/car-services/car.service";
import {apiBaseUrl} from "../../data/api-config";

@Component({
  selector: 'app-car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.css']
})
export class CarSliderComponent implements  AfterViewInit {
  cars: Car[] = [];
  constructor(private carService: CarService) {}


  private swiper?: Swiper; // تعريف متغير Swiper

  async ngAfterViewInit() {
    this.cars= await this.carService.getLastFourCars();
      this.swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
    });
    setInterval(() => {
      const currentIndex = this.swiper!.activeIndex;
      const nextIndex = (currentIndex + 1) % this.cars.length;
      this.swiper!.slideTo(nextIndex);
    }, 3000);
  }

  protected readonly apiBaseUrl = apiBaseUrl;
}
