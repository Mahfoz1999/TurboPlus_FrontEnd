import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from "./shop/shop.component";
import {HomeComponent} from "./home/home.component";
import {CarProfileComponent} from "./car-profile/car-profile.component";
import {FAQComponent} from "./faq/faq.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import { BrandComponent } from './brand/brand.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'car-profile', component: CarProfileComponent},
  {path: 'FAQ', component: FAQComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'search-results', component: SearchResultsComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'add-car',component: AddCarComponent},
  {path: 'update-car',component: UpdateCarComponent},
  {path: 'dashboard',component: DashbordComponent},
  {path: 'admin',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
