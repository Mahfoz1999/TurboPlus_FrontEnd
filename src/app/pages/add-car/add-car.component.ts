import {Component, OnInit} from '@angular/core';
import {Brand} from '../data/models/brand.model';
import {BrandService} from '../data/services/brand-services/brand.service';
import {CarService} from '../data/services/car-services/car.service';
import {CarForm} from '../data/models/car.form';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  mainImageFile: File | null = null;
  coverImageFile: File | null = null;
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
    carImages: []
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

  constructor(private brandService: BrandService, private carService: CarService, private toastr: ToastrService) {
  }

  onSubmit() {
    if (this.carData) {
      const carFormData = new CarForm(
        this.mainImageFile!,
        this.coverImageFile!,
        this.carData.name,
        this.carData.year,
        this.carData.price,
        this.carData.brandId,
        this.carData.description,
        this.carImagesFiles
      );
      this.carService.AddCar(carFormData);
      this.toastr.success('Car has been added successfully', 'Success');
    }
  }

  ngOnInit() {
    this.brandService.getBrands().subscribe(data => {
      this.brands = data;
    });
  }
}
