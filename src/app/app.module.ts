import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './home/home.component';
import {TipComponent} from './tip/tip.component';
import {NgOptimizedImage} from "@angular/common";
import {CarSliderComponent} from './car-slider/car-slider.component';
import {CardComponent} from './card/card.component';
import {FooterComponent} from './footer/footer.component';
import {ShopComponent} from './shop/shop.component';
import {CarProfileComponent} from './car-profile/car-profile.component';
import {FAQComponent} from './faq/faq.component';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { SearchResultsComponent } from './search-results/search-results.component';
import { DubaiSectionComponent } from './dubai-section/dubai-section.component';
import { ReviewComponent } from './review/review.component';
import { BrandComponent } from './brand/brand.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ImageModelComponent } from './image-model/image-model.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
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
    DashbordComponent,
    UpdateCarComponent,
    DatePickerComponent,
    ImageModelComponent,
    LoginComponent,
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
