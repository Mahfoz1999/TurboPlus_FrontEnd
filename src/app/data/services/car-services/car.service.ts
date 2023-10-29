import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Car} from "../../models/car.model";
import {apiBaseUrl} from "../../api-config";
import {CarInfo} from "../../models/carInfo.model";
import { CarForm } from '../../models/car.form';
import { CarUpdateForm } from '../../models/car.update.form';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${apiBaseUrl}api/Car/GetAllCars`);
  }

  getCarsByBrand(brandId: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${apiBaseUrl}api/Car/GetCarsByBrand?brandId=${brandId}`);
  }
  getCarsByQuery(query: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${apiBaseUrl}api/Car/GetCarsByQuery?query=${query}`);
  }

  getLastFourCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${apiBaseUrl}api/Car/GetLastFourCars`);
  }

  getCar(id: string): Observable<CarInfo> {
    return this.http.get<CarInfo>(`${apiBaseUrl}api/Car/GetCar?Id=${id}`);
  }
  getRandomCar(): Observable<CarInfo> {
    return this.http.get<CarInfo>(`${apiBaseUrl}api/Car/GetRandomCar`);
  }
  removeCar(id: string) {
    return this.http.delete(`${apiBaseUrl}api/Car/RemoveCar?Id=${id}`);
  }
  AddCar(carData: CarForm) {
    console.log(carData.coverPhoto);
    console.log(carData.mainImage);
    const formData = new FormData();
    formData.append('MainImage', carData.mainImage);
    formData.append('CoverPhoto', carData.coverPhoto);
    formData.append('Name', carData.name);
    formData.append('Year', carData.year.toString()); // تأكد من أنه عدد
    formData.append('Price', carData.price.toString()); // تأكد من أنه عدد مع النقاط العائمة
    formData.append('BrandId', carData.brandId);
    formData.append('Description', carData.description);
    
    // تحقق من أن Images هي مصفوفة من الملفات
    for (const carImage of carData.carImages) {
      formData.append('Images', carImage);
    }
  
    this.http.post(apiBaseUrl + 'api/Car/AddCar', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  UpdateCar(carData: CarUpdateForm) {
    const formData = new FormData();
    formData.append('Id', carData.id);
    formData.append('MainImage', carData.mainImage);
    formData.append('CoverPhoto', carData.coverPhoto);
    formData.append('Name', carData.name);
    formData.append('Year', carData.year.toString()); // تأكد من أنه عدد
    formData.append('Price', carData.price.toString()); // تأكد من أنه عدد مع النقاط العائمة
    formData.append('BrandId', carData.brandId);
    formData.append('Description', carData.description);
    
    this.http.put(apiBaseUrl + 'api/Car/UpdateCar', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
