import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen: boolean = false;
  searchTerm: string = '';
  currentRoute: string = '';
  selectedLanguage: string = ''; // إضافة اللغة المحددة هنا

  constructor(public translate: TranslateService, private translationService: TranslationService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    // احصل على اللغة المحددة من localStorage واستخدمها كقيمة افتراضية للقائمة
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
    } else {
      this.selectedLanguage = 'en'; // يمكن تعيين اللغة الافتراضية هنا
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  search() {
    console.log(this.searchTerm);
    if (this.searchTerm.trim() !== '') {
      // Navigate to the search results page with the search term as a query parameter
      this.router.navigate(['/search-results'], { queryParams: { query: this.searchTerm } });
    }
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.translationService.changeLanguage(selectedLanguage);

    // تحديث اللغة المحددة في القائمة المنسدلة عن طريق تعيينها بناءً على اللغة المحددة
    this.selectedLanguage = selectedLanguage;
  }
}
