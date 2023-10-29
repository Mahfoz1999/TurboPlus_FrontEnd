export class CarForm {
    constructor(
        public mainImage:File,
        public coverPhoto:File,
        public name: string,
        public year: number,
        public price: number,
        public brandId: string,
        public description: string,
        public carImages: File[]
    ) {}

  }
