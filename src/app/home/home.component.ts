import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {CarService} from "../data/services/car-services/car.service";
import {Car} from "../data/models/car.model";
import {apiBaseUrl} from "../data/api-config";
import {CarInfo} from "../data/models/carInfo.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Image1: string = 'assets/images/pexels-jeshootscom-13861.jpg';
  Image3: string = 'assets/images/Honda-white-SUV-snow-grass_3840x2160.jpg';
  cars: Car[] = [];
  car?: CarInfo;
  currentBackgroundIndex = 0;
  constructor(public translate: TranslateService, private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getLastFourCars().subscribe(cars => {
      this.cars = cars;
    });
    this.carService.getRandomCar().subscribe(car => {
      this.car = car;
    });
    setInterval(() => {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.cars.length;
    }, 3000); // تغيير الصورة كل 3 ثواني
  }

  protected readonly apiBaseUrl = apiBaseUrl;
}
