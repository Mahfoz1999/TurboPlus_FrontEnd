import {Component, OnInit} from '@angular/core';
import {CarInfo} from "../../data/models/carInfo.model";
import {CarService} from "../../data/services/car-services/car.service";
import {BrandService} from '../../data/services/brand-services/brand.service';
import {ActivatedRoute} from '@angular/router';
import {apiBaseUrl} from "../../data/api-config";
import {BrandInfo} from '../../data/models/brandInfo.model';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit {
  car?: CarInfo;
  brand?: BrandInfo;
  showImage: boolean = false;
  startDate?: string;
  endDate?: string;
  selectedImage: string = '';
  loading: boolean = true;

  viewImage(image: string) {
    this.selectedImage = this.apiBaseUrl + image;
    this.showImage = true;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  whatsappNumber: string = '+971507232473';


  navigateToWhatsApp() {
    if (this.startDate != undefined && this.endDate != undefined) {
      const messageText: string = 'Hello there i want to book this car : ' + this.car?.brandName + ' ' + this.car?.name + ' ' + this.car?.year + " from start date : " + this.startDate + " to End Date : " + this.endDate;
      const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=${messageText}`;
      window.open(whatsappLink, "_blank");
    } else {
      const messageText: string = 'Hello there i want to book this car : ' + this.car?.brandName + ' ' + this.car?.name + ' ' + this.car?.year;
      const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=${messageText}`;
      window.open(whatsappLink, "_blank");
    }
  }

  closeImage() {
    this.showImage = false;
  }

  constructor(public translate: TranslateService, private carService: CarService, private brandService: BrandService, private route: ActivatedRoute) {
  }


  onStartDatepickerValueChanged(value: string) {
    this.startDate = value;
  }

  onEndDatepickerValueChanged(value: string) {
    this.endDate = value;
  }


  async ngOnInit() {
    this.scrollToTop();
    this.loading = true;
    this.route.queryParams.subscribe(async params => {
      const carId = params['carId'];
      if (carId) {
        this.car=await this.carService.getCar(carId);
      }
    });
    this.loading = false;
  }


  protected readonly apiBaseUrl = apiBaseUrl;
}
