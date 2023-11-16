import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {apiBaseUrl} from "../../data/api-config";
import {CarService} from "../../data/services/car-services/car.service";
import {Car} from "../../data/models/car.model";
import {BrandService} from "../../data/services/brand-services/brand.service";
import {BrandInfo} from "../../data/models/brandInfo.model";
import { Brand } from 'src/app/data/models/brand.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  loading: boolean = true;
  cars: Car[] = [];
  brandsLogo:Brand[]=[];
  brands:BrandInfo[] =[];
  Image1:string='assets/images/pexels-mike-bird-120049.jpg';
  constructor(public translate: TranslateService,private carService: CarService,private  brandService: BrandService) {
  }

    protected readonly apiBaseUrl = apiBaseUrl;

  async ngOnInit() {
    this.loading = true;
    this.brandsLogo=await this.brandService.getBrands();
    this.brands=await this.brandService.getBrandsWithCars();
    this.cars=await this.carService.getCars();
    this.loading = false;
  }


}
