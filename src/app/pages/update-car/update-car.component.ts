import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../data/services/brand-services/brand.service';
import { CarService } from '../../data/services/car-services/car.service';
import { Brand } from '../../data/models/brand.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarUpdateForm } from '../../data/models/car.update.form';
import { CarInfo } from '../../data/models/carInfo.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit{
  mainImageFile: File | null = null;
  coverImageFile: File | null = null;
  car?: CarInfo;
  carImagesFiles: File[] = [];
    brands?: Brand[];
    carData = {
      mainImage: null,
      coverPhoto: null,
      name: '',
      year: 0,
      price: 0,
      brandId: '',
      description: '',
    };
    onMainImageChange(event: any) {
      if (event.target.files && event.target.files.length > 0) {
        this.mainImageFile = event.target.files[0];
      }
    }

    onCoverImageChange(event: any) {
      if (event.target.files && event.target.files.length > 0) {
        this.coverImageFile = event.target.files[0];
      }
    }
    onCarImagesChange(event: any) {
      if (event.target.files && event.target.files.length > 0) {
        this.carImagesFiles = Array.from(event.target.files);
      }
    }
    constructor(private brandService: BrandService,private carService:CarService,private route: ActivatedRoute,private router: Router) {}
    onSubmit(){
      if (this.carData) {
        const carFormData = new CarUpdateForm(
          this.car!.id,
          this.mainImageFile!,
          this.coverImageFile!,
          this.carData.name,
          this.carData.year,
          this.carData.price,
          this.carData.brandId,
          this.carData.description,
        );
        this.carService.UpdateCar(carFormData);
      }
    }
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const carId = params['carId'];
        if (carId) {
          this.loadCarDetails(carId);
        }
      });
      this.brandService.getBrands().subscribe(data => {
        this.brands = data;
      });
    }
    loadCarDetails(carId: string) {
      this.carService.getCar(carId).subscribe((car: CarInfo) => {
        this.car = car;
      });
    }
}
