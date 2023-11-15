import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  car: string;
  quote: string;
  image: string;
  position: string; // Added position field
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  testimonials: Testimonial[] = [
    {
      name:'Karen Nelson',
      car: 'Mercedes S-Class',
      quote: 'I recently rented the luxurious Mercedes S-Class from Turbo Plus, and I\'m speechless about the seamless experience. The service was easy, efficient, and the car was in excellent condition.',
      image: 'assets/images/Karen Nelson.jpg',
      position: 'Marketing Director'
    },
    {
      name:'Roberta Casas',
      car: 'BMW 7 Series',
      quote: 'I had an unforgettable experience renting the BMW 7 Series from Turbo Plus. Everything was perfect, from the high-quality service to the performance of the car.',
      image: 'assets/images/Roberta Casas.jpg',
      position: 'Product Manager'
    },
    {
      name:'Jese Leos',
      car: 'Audi A8',
      quote: 'My rental of the Audi A8 from Turbo Plus was filled with luxury and elegance. The car was in excellent condition, and the service was top-notch.',
      image: 'assets/images/Jese Leos.jpg',
      position: 'Tech Lead'
    },
    {
      name:'Alex Jones',
      car: 'Tesla Model S',
      quote: 'I rented the Tesla Model S from Turbo Plus, and the experience was outstanding. The car delivered a smooth ride, and the rental process was hassle-free.',
      image: 'assets/images/Alex Jones.jpg',
      position: 'UX Designer'
    },
    {
      name:'Lisa Jackson',
      car: 'Porsche 911',
      quote: 'Renting the Porsche 911 from Turbo Plus was a thrilling experience. The car\'s performance was exceptional, and the staff provided excellent service.',
      image: 'assets/images/Lisa Jackson.jpg',
      position: 'Operations Manager'
    },
    {
      name:'Michael Smith',
      car: 'Jaguar F-Type',
      quote: 'My experience with Turbo Plus and their Jaguar F-Type was fantastic. The customer service was exceptional, and the car was a joy to drive.',
      image: 'assets/images/Michael Smith.jpg',
      position: 'Finance Analyst'
    }
  ];
}
