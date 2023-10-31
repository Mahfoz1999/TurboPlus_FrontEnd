import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    // قم بالتحقق مما إذا كانت هناك قيمة مختارة مسبقًا في localStorage
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.translate.use(savedLang);
    } else {
      // إذا لم تكن هناك قيمة مختارة مسبقًا، استخدم اللغة الافتراضية
      this.translate.setDefaultLang('en');
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    // قم بحفظ اللغة المختارة في localStorage للاستخدام في الصفحات اللاحقة
    localStorage.setItem('selectedLanguage', lang);
  }
}
