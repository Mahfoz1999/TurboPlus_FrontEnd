import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from "./shop/shop.component";
import {HomeComponent} from "./home/home.component";
import {CarProfileComponent} from "./car-profile/car-profile.component";
import {FAQComponent} from "./faq/faq.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ImageViewerComponent} from "./image-viewer/image-viewer.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import { BrandComponent } from './brand/brand.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'car-profile', component: CarProfileComponent},
  {path: 'image-viewer/:image', component: ImageViewerComponent},
  {path: 'FAQ', component: FAQComponent},
  {path: 'about-us', component: AboutUsComponent},
  {
    path: 'search-results', component: SearchResultsComponent
  },
  {path: 'brand', component: BrandComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
