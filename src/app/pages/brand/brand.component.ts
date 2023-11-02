import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {apiBaseUrl} from "../data/api-config";
import {CarService} from "../data/services/car-services/car.service";
import {Car} from "../data/models/car.model";
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  cars: Car[] = [];
  brandName!:string;
  loading: boolean = true;
  constructor(public translate: TranslateService,private carService: CarService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.loading=true;
    this.route.queryParams.subscribe(params => {
      const brandId = params['brandId'];
      this.brandName = params['brandName'];
      if (brandId) {
        this.carService.getCarsByBrand(brandId).subscribe(cars => {
          this.cars = cars;
        });
      }
    });
    this.loading=false;
  }
  protected readonly apiBaseUrl = apiBaseUrl;
}
