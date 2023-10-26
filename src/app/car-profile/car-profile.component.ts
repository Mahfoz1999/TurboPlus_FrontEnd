
import {Component, OnInit} from '@angular/core';
import {CarInfo} from "../data/models/carInfo.model";
import {CarService} from "../data/services/car-services/car.service";
import {ActivatedRoute, Router} from '@angular/router';
import {apiBaseUrl} from "../data/api-config";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit {
  car?: CarInfo;
  viewImage(image: string) {
    this.router.navigate(['/image-viewer', image]);
  }
  constructor(private carService: CarService, private route: ActivatedRoute,private router: Router) {
  }

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
    });
  }

  protected readonly apiBaseUrl = apiBaseUrl;
}
