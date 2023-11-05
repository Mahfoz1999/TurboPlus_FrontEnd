import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from "./pages/shop/shop.component";
import {HomeComponent} from "./pages/home/home.component";
import {CarProfileComponent} from "./pages/car-profile/car-profile.component";
import {FAQComponent} from "./pages/faq/faq.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {SearchResultsComponent} from "./pages/search-results/search-results.component";
import {BrandComponent} from './pages/brand/brand.component';
import {AddCarComponent} from './pages/add-car/add-car.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UpdateCarComponent} from './pages/update-car/update-car.component';
import {LoginComponent} from "./pages/login/login.component";
import {AllCarsComponent} from "./pages/all-cars/all-cars.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'car-profile', component: CarProfileComponent},
  {path: 'FAQ', component: FAQComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'search-results', component: SearchResultsComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'update-car', component: UpdateCarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'all-cars', component: AllCarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
