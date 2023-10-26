import { Component } from '@angular/core';

@Component({
  selector: 'app-dubai-section',
  templateUrl: './dubai-section.component.html',
  styleUrls: ['./dubai-section.component.css']
})
export class DubaiSectionComponent {
  selectedTabIndex: number = 0;

  tabs = [
    {
      title: 'Saving Time',
      content: 'On a private car, you can visit many unique places in the UAE and at the same time not waste time collecting tourists from hotels, stopping at shops and other unnecessary details',
    },
    {
      title: 'Low Crime Rate',
      content: 'The UAE is one of the states where you can safely move around and not be afraid to leave your car anywhere. Nothing will happen to him for sure',
    },
    {
      title: 'Car Park',
      content: 'The car park offered by rental companies deserves special praise. Many of the cars here are new and in excellent condition. Often the tenant receives a vehicle with a mileage of no more than 1 thousand - 2 thousand km',
    },
    {
      title: 'Car Delivery',
      content: "Having your car shipped to a location that's convenient for you can greatly simplify the process of buying or moving a car. You don't need to go to the dealership or where the car is located, which reduces time and effort",
    },
  ];

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }
}
