
import {Component, OnInit, ElementRef, HostListener, ViewChild} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {CarInfo} from "../data/models/carInfo.model";
import {CarService} from "../data/services/car-services/car.service";
import { BrandService } from '../data/services/brand-services/brand.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {apiBaseUrl} from "../data/api-config";
import {initFlowbite} from "flowbite";
import { BrandInfo } from '../data/models/brandInfo.model';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit {
  car?: CarInfo;
  brand?:BrandInfo;
  showImage: boolean = false;
  startDate?: string;
  endDate?: string;
  selectedImage: string = '';
  viewImage(image: string) {
    this.selectedImage = this.apiBaseUrl + image;
    this.showImage = true;
  }
   // Replace this value with your own phone number in international format
   whatsappNumber: string = '+971507232473';

   // Replace this value with your own message text encoded with URL
   messageText: string = 'Hello there i want to book this car : '+this.car?.brandName+' '+this.car?.name+' '+this.car?.year +" from start date : "+this.startDate+" to End Date : "+this.endDate;
 
   // Generate the click to chat link
   whatsappLink: string = `https://wa.me/${this.whatsappNumber}?text=${this.messageText}`;
  @ViewChild('routerOutlet') routerOutlet: any;
  closeImage() {
    this.showImage = false;
  }
  constructor(public translate: TranslateService,private carService: CarService,private viewportScroller: ViewportScroller,private brandService: BrandService, private route: ActivatedRoute,private router: Router) {
    this.router.events.subscribe(event => {
      // Check if the event is a navigation end event
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the router outlet element
        this.routerOutlet.nativeElement.scrollIntoView();
      }
    });
  }


  onStartDatepickerValueChanged(value: string) {
    this.startDate=value;
  }
  onEndDatepickerValueChanged(value: string) {
    this.endDate=value;
  }
  onSubmit() {
    // يمكنك استخدام startDate و endDate هنا
    console.log("Start Date: ", this.startDate);
    console.log("End Date: ", this.endDate);
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
      this.brandService.getBrand(car.brandId).subscribe((brand: BrandInfo) => {
        this.brand = brand;
      });
    });
   
  }
  

  protected readonly apiBaseUrl = apiBaseUrl;
}
