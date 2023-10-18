import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.css']
})
export class CarSliderComponent implements  AfterViewInit {
  cars = [
    {
      image: 'assets/images/1.jpg',
      year: '2022',
      type: 'hatchback',
      name: 'Eco Hatch',
      description: 'An eco-friendly hatchback with excellent fuel efficiency and a spacious interior.',
      mileage: '10000',
      price: '25,500.00 AED',
    },
    {
      image: 'assets/images/2.jpg',
      year: '2021',
      type: 'SUV',
      name: 'Adventure SUV',
      description: 'A rugged and capable SUV designed for off-road adventures.',
      mileage: '8000',
      price: '42,000.00 AED',
    },
    {
      image: 'assets/images/3.jpg',
      year: '2020',
      type: 'sedan',
      name: 'Luxury Sedan',
      description: 'Experience the epitome of luxury and comfort with this high-end sedan.',
      mileage: '12000',
      price: '55,500.00 AED',
    },
    {
      image: 'assets/images/4.jpg',
      year: '2019',
      type: 'convertible',
      name: 'Convertible Beauty',
      description: 'A stylish and elegant convertible thats perfect for sunny days.',
      mileage: '15000',
      price: '38,500.00 AED',
    },
    {
      image: 'assets/images/63f6567748c3a5513947b230_martin-katler-y3neNkE6efI-unsplash.jpg',
      year: '2022',
      type: 'SUV',
      name: 'Family SUV',
      description: 'A spacious and family-friendly SUV with advanced safety features.',
      mileage: '6000',
      price: '49,500.00 AED',
    },
  ];



  private swiper?: Swiper; // تعريف متغير Swiper

  ngAfterViewInit(): void {
    // تهيئة Swiper
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
    });

    // تغيير الشريحة كل 10 ثواني
    setInterval(() => {
      const currentIndex = this.swiper!.activeIndex;
      const nextIndex = (currentIndex + 1) % this.cars.length;
      this.swiper!.slideTo(nextIndex);
    }, 10000);
  }

}
