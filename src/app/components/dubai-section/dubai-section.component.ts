import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-dubai-section',
  templateUrl: './dubai-section.component.html',
  styleUrls: ['./dubai-section.component.css']
})
export class DubaiSectionComponent {
  selectedTabIndex: number = 0;
  constructor(public translate: TranslateService) {
  }
  selectTab(index: number) {
    this.selectedTabIndex = index;
  }
}
