import { Component, OnInit } from '@angular/core';
import { CarService } from '../../data/services/car-services/car.service';
import { apiBaseUrl } from '../../data/api-config';
import { Car } from '../../data/models/car.model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
  cars: Car[] = [];
  constructor(private carService: CarService) {}
  protected readonly apiBaseUrl = apiBaseUrl;
  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }
  removeCar(id: string) {
    this.carService.removeCar(id).subscribe(response=>{
      this.cars = this.cars.filter(car => car.id !== id); // تحديث المصفوفة بعد الحذف
    }) ;
}

}
