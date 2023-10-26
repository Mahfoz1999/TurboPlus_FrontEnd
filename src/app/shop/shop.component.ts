import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {apiBaseUrl} from "../data/api-config";
import {CarService} from "../data/services/car-services/car.service";
import {Car} from "../data/models/car.model";
import {BrandService} from "../data/services/brand-services/brand.service";
import {BrandInfo} from "../data/models/brandInfo.model";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  cars: Car[] = [];
  brands:BrandInfo[] =[];
  Image1:string='assets/images/pexels-mike-bird-120049.jpg';
  constructor(public translate: TranslateService,private carService: CarService,private  brandService: BrandService) {
  }

    protected readonly apiBaseUrl = apiBaseUrl;

  ngOnInit(): void {
    this.brandService.getBrandsWithCars().subscribe(brands => {
      this.brands=brands;
    })
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }
}
