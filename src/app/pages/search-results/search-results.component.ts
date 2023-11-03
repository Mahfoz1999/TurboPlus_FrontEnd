import {Component, OnInit} from '@angular/core';
import {Car} from "../../data/models/car.model";
import {TranslateService} from "@ngx-translate/core";
import {CarService} from "../../data/services/car-services/car.service";
import {apiBaseUrl} from '../../data/api-config';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  cars: Car[] = [];
  loading: boolean = true;
  protected readonly apiBaseUrl = apiBaseUrl;

  constructor(public translate: TranslateService, private carService: CarService, private route: ActivatedRoute, private router: Router) {
  }

  async ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe(async params => {
      const query = params['query'];
      this.cars=await this.carService.getCarsByQuery(query);
    });
    this.loading = false;
  }
}
