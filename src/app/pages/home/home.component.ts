import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {CarService} from "../../data/services/car-services/car.service";
import {Car} from "../../data/models/car.model";
import {apiBaseUrl} from "../../data/api-config";
import {CarInfo} from "../../data/models/carInfo.model";
import { Router, NavigationEnd } from '@angular/router';
import {Brand} from "../../data/models/brand.model";
import {BrandService} from "../../data/services/brand-services/brand.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  private scrollPosition = 0;
  loading: boolean = true;
  cars: Car[] = [];
  brands:Brand[] = [];
  car?: CarInfo;
  currentBackgroundIndex = 0;
  constructor(public translate: TranslateService, private carService: CarService,private brandService:BrandService,private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          window.scrollTo(0, this.scrollPosition);
        } else {
          this.scrollPosition = window.scrollY;
        }
      }
    });
  }

  async ngOnInit() {
    this.loading=true;
    this.cars=await this.carService.getLastFourCars();
    this.car=await this.carService.getRandomCar(); 
    this.brands=await this.brandService.getBrands();
    this.loading=false;
    setInterval(() => {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.cars.length;
    }, 3000);
  }

  protected readonly apiBaseUrl = apiBaseUrl;
}
