
import {Component, OnInit} from '@angular/core';
import {CarInfo} from "../data/models/carInfo.model";
import {CarService} from "../data/services/car-services/car.service";
import { BrandService } from '../data/services/brand-services/brand.service';
import {ActivatedRoute, Router} from '@angular/router';
import {apiBaseUrl} from "../data/api-config";
import {initFlowbite} from "flowbite";
import { BrandInfo } from '../data/models/brandInfo.model';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit {
  car?: CarInfo;
  brand?:BrandInfo;
  viewImage(image: string) {
    this.router.navigate(['/image-viewer', image]);
  }
  constructor(public translate: TranslateService,private carService: CarService,private brandService: BrandService, private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
    this.route.queryParams.subscribe(params => {
      const carId = params['carId'];
      if (carId) {
        this.loadCarDetails(carId);
      }
    });
  }

  loadCarDetails(carId: string) {
    this.carService.getCar(carId).subscribe((car: CarInfo) => {
      this.car = car;
      this.brandService.getBrand(car.brandId).subscribe((brand: BrandInfo) => {
        this.brand = brand;
      });
    });
   
  }

  protected readonly apiBaseUrl = apiBaseUrl;
}
