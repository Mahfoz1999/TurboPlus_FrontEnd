import {Component, Input} from '@angular/core';
import {whatsappNumber} from "../../data/api-config";

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
@Input() image?: string;
@Input() title?: string;
@Input() body?: string;

  navigateToWhatsApp() {
      const messageText: string = 'Hello there i want to book a car ';
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${messageText}`;
      window.open(whatsappLink, "_blank");
  }
}
