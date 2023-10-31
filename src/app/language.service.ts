import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selectedLanguage: string = 'en'; // اللغة الافتراضية

  changeLanguage(newLanguage: string) {
    this.selectedLanguage = newLanguage;
  }
}
