import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {apiBaseUrl} from "../../api-config";
import {Brand} from "../../models/brand.model";
import {BrandInfo} from "../../models/brandInfo.model";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) {
  }
  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${apiBaseUrl}api/Brand/GetAllBrands`);
  }
  getBrand(id:string): Observable<BrandInfo> {
    return this.http.get<BrandInfo>(`${apiBaseUrl}api/Brand/GetBrand?Id=${id}`);
  }
  getBrandsWithCars(): Observable<BrandInfo[]> {
    return this.http.get<BrandInfo[]>(`${apiBaseUrl}api/Brand/GetAllBrandsWithCars`);
  }
}
