import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from "./shop/shop.component";
import {HomeComponent} from "./home/home.component";
import {CarProfileComponent} from "./car-profile/car-profile.component";
import {FAQComponent} from "./faq/faq.component";
import {AboutUsComponent} from "./about-us/about-us.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'car-profile', component: CarProfileComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
