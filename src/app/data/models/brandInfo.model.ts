import {Car} from "./car.model";

export interface BrandInfo {
  id: string;
  name: string;
  description: string;
  brandLogoFileUrl: string;
  cars: Car[];
}
