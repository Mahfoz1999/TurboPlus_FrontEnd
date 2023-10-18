import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentBackgroundIndex = 0;
  backgrounds: string[] = [
    'assets/images/pexels-mike-bird-977003.jpg',
    'assets/images/pexels-pixabay-210019.jpg',
    'assets/images/pexels-pixabay-358070.jpg',
    // أضف المزيد من المسارات حسب الحاجة
  ];
  Image1: string = 'assets/images/pexels-jeshootscom-13861.jpg';
  Image2: string = 'assets/images/Honda-white-SUV-snow-grass_3840x2160.jpg';
  Image3: string = 'assets/images/pexels-s-von-hoerst-2920064.jpg';

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    // تغيير الخلفية كل 10 ثواني
    setInterval(() => {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgrounds.length;
    }, 3000); // 10000 مللي ثانية (10 ثواني)
  }

}
