import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../models/car.model';
import { apiBaseUrl } from '../../api-config';
import { CarInfo } from '../../models/carInfo.model';
import { CarForm } from '../../models/car.form';
import { CarUpdateForm } from '../../models/car.update.form';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  async getCars(): Promise<Car[]> {
    try {
      const cars = await this.http.get<Car[]>(`${apiBaseUrl}api/Car/GetAllCars`).toPromise();
      return cars!;
    } catch (error) {
      console.error('An error occurred while fetching cars:', error);
      throw error;
    }
  }

  async getCarsByBrand(brandId: string): Promise<Car[]> {
    try {
      const cars = await this.http
        .get<Car[]>(`${apiBaseUrl}api/Car/GetCarsByBrand?brandId=${brandId}`)
        .toPromise();
      return cars!;
    } catch (error) {
      console.error('An error occurred while fetching cars by brand:', error);
      throw error;
    }
  }

  async getCarsByQuery(query: string): Promise<Car[]> {
    try {
      const cars = await this.http
        .get<Car[]>(`${apiBaseUrl}api/Car/GetCarsByQuery?query=${query}`)
        .toPromise();
      return cars!;
    } catch (error) {
      console.error('An error occurred while fetching cars by query:', error);
      throw error;
    }
  }

  async getLastFourCars(): Promise<Car[]> {
    try {
      const cars = await this.http.get<Car[]>(`${apiBaseUrl}api/Car/GetLastFourCars`).toPromise();
      return cars!;
    } catch (error) {
      console.error('An error occurred while fetching the last four cars:', error);
      throw error;
    }
  }

  async getCar(id: string): Promise<CarInfo> {
    try {
      const carInfo = await this.http.get<CarInfo>(`${apiBaseUrl}api/Car/GetCar?Id=${id}`).toPromise();
      return carInfo!;
    } catch (error) {
      console.error('An error occurred while fetching car info:', error);
      throw error;
    }
  }

  async getRandomCar(): Promise<CarInfo> {
    try {
      const carInfo = await this.http.get<CarInfo>(`${apiBaseUrl}api/Car/GetRandomCar`).toPromise();
      return carInfo!;
    } catch (error) {
      console.error('An error occurred while fetching a random car:', error);
      throw error;
    }
  }

  async removeCar(id: string): Promise<void> {
    try {
      await this.http.delete(`${apiBaseUrl}api/Car/RemoveCar?Id=${id}`).toPromise();
    } catch (error) {
      console.error('An error occurred while removing the car:', error);
      throw error;
    }
  }

  async AddCar(carData: CarForm): Promise<void> {
    try {
      const formData = new FormData();
      formData.append('MainImage', carData.mainImage);
      formData.append('CoverPhoto', carData.coverPhoto);
      formData.append('Name', carData.name);
      formData.append('Year', carData.year.toString());
      formData.append('Price', carData.price.toString());
      formData.append('BrandId', carData.brandId);
      formData.append('Description', carData.description);

      for (const carImage of carData.carImages) {
        formData.append('Images', carImage);
      }

      await this.http.post(`${apiBaseUrl}api/Car/AddCar`, formData).toPromise();
    } catch (error) {
      console.error('An error occurred while adding a car:', error);
      throw error;
    }
  }

  async UpdateCar(carData: CarUpdateForm): Promise<void> {
    try {
      const formData = new FormData();
      formData.append('Id', carData.id);
      formData.append('MainImage', carData.mainImage);
      formData.append('CoverPhoto', carData.coverPhoto);
      formData.append('Name', carData.name);
      formData.append('Year', carData.year.toString());
      formData.append('Price', carData.price.toString());
      formData.append('BrandId', carData.brandId);
      formData.append('Description', carData.description);

      await this.http.put(`${apiBaseUrl}api/Car/UpdateCar`, formData).toPromise();
    } catch (error) {
      console.error('An error occurred while updating a car:', error);
      throw error;
    }
  }
}
