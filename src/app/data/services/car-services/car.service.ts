import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Car} from "../../models/car.model";
import {apiBaseUrl} from "../../api-config";
import {CarInfo} from "../../models/carInfo.model";

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
}
