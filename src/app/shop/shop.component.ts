import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  Image1:string='assets/images/pexels-mike-bird-120049.jpg';
  constructor(public translate: TranslateService) {
  }
}
