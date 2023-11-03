import { Component, OnInit } from '@angular/core';
import { CarService } from '../../data/services/car-services/car.service';
import { apiBaseUrl } from '../../data/api-config';
import { Car } from '../../data/models/car.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  cars: Car[] = [];
  constructor(private carService: CarService) {}
  protected readonly apiBaseUrl = apiBaseUrl;
  async ngOnInit() {
    this.cars=await this.carService.getCars();
  }
  async removeCar(id: string) {
    await this.carService.removeCar(id);
    this.cars = this.cars.filter(car => car.id !== id);  
}

}
