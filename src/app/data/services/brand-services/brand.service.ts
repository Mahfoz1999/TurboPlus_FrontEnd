import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../../api-config';
import { Brand } from '../../models/brand.model';
import { BrandInfo } from '../../models/brandInfo.model';

@Injectable({
  providedIn: 'root',
})
export class BrandService {

  constructor(private http: HttpClient) {
  }

  async getBrands(): Promise<Brand[]> {
    try {
      const brands = await this.http.get<Brand[]>(`${apiBaseUrl}api/Brand/GetAllBrands`).toPromise();
      return brands!;
    } catch (error) {
      console.error('An error occurred while fetching brands:', error);
      throw error;
    }
  }

  async getBrand(id: string): Promise<BrandInfo> {
    try {
      const brandInfo = await this.http.get<BrandInfo>(`${apiBaseUrl}api/Brand/GetBrand?Id=${id}`).toPromise();
      return brandInfo!;
    } catch (error) {
      console.error('An error occurred while fetching brand info:', error);
      throw error;
    }
  }

  async getBrandsWithCars(): Promise<BrandInfo[]> {
    try {
      const brandsWithCars = await this.http.get<BrandInfo[]>(`${apiBaseUrl}api/Brand/GetAllBrandsWithCars`).toPromise();
      return brandsWithCars!;
    } catch (error) {
      console.error('An error occurred while fetching brands with cars:', error);
      throw error;
    }
  }
}
