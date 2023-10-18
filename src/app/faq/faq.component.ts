import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqList = [
    {
      question: 'Is there a minimum rental age?',
      answer: 'Yes, the minimum rental age is 21, and additional fees may apply for drivers under 25.',
      isExpanded: false
    },
    {
      question: 'Do you offer discounts for long-term rentals?',
      answer: 'Yes, we offer discounts for rentals that exceed a certain number of days. Check our website or contact us for more details.',
      isExpanded: false
    },
    {
      question: 'Can I modify or cancel my reservation?',
      answer: 'Yes, you can modify or cancel your reservation, but fees may apply depending on the timing and changes made. Please refer to our cancellation policy for details.',
      isExpanded: false
    },
    {
      question: 'Do you offer child safety seats or GPS navigation devices?',
      answer: 'Yes, we offer child safety seats and GPS navigation devices for an additional fee. You can request these when making your reservation.',
      isExpanded: false
    },
    {
      question: 'What should I do in case of a breakdown or accident with the rental car?',
      answer: 'In case of a breakdown or accident, contact our customer support immediately. We will provide guidance on the necessary steps to take, which may include calling the authorities and our insurance company.',
      isExpanded: false
    },
    // يمكنك إضافة المزيد من الأسئلة والإجابات حسب احتياجاتك.
  ];
  constructor(public translate: TranslateService) {
  }
}
