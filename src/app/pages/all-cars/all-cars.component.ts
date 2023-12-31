import {Component, OnInit} from '@angular/core';
import {Car} from "../../data/models/car.model";
import {TranslateService} from "@ngx-translate/core";
import {CarService} from "../../data/services/car-services/car.service";
import { apiBaseUrl } from 'src/app/data/api-config';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit{
  cars: Car[] = [];
  loading: boolean = true;

  constructor(public translate: TranslateService, private carService: CarService) {
  }


  protected readonly apiBaseUrl = apiBaseUrl;

  async ngOnInit() {
    this.loading = true;
    this.cars=await this.carService.getCars();
    this.loading = false;
  }
}
