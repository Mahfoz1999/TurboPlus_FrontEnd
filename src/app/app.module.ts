import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './pages/home/home.component';
import {TipComponent} from './components/tip/tip.component';
import {NgOptimizedImage} from "@angular/common";
import {CarSliderComponent} from './components/car-slider/car-slider.component';
import {FooterComponent} from './components/footer/footer.component';
import {CardComponent} from './components/card/card.component';
import {ShopComponent} from './pages/shop/shop.component';
import {CarProfileComponent} from './pages/car-profile/car-profile.component';
import {FAQComponent} from './pages/faq/faq.component';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { DubaiSectionComponent } from './components/dubai-section/dubai-section.component';
import { ReviewComponent } from './components/review/review.component';
import { BrandComponent } from './pages/brand/brand.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ImageModelComponent } from './components/image-model/image-model.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './pages/login/login.component';
import {AllCarsComponent}from './pages/all-cars/all-cars.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { CarouselComponent } from './carousel/carousel.component' ;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TipComponent,
    CarSliderComponent,
    CardComponent,
    FooterComponent,
    ShopComponent,
    CarProfileComponent,
    FAQComponent,
    AboutUsComponent,
    NewsLetterComponent,
    SearchResultsComponent,
    DubaiSectionComponent,
    ReviewComponent,
    BrandComponent,
    AddCarComponent,
    DashboardComponent,
    UpdateCarComponent,
    DatePickerComponent,
    ImageModelComponent,
    LoginComponent,
    AllCarsComponent,
    ServiceCardComponent,
    CarouselComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        RouterModule,
        NgOptimizedImage,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        BrowserAnimationsModule,
        FormsModule,
        ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
