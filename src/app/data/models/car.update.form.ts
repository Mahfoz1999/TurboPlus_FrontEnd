export class CarUpdateForm {
    constructor(
        public id:string,
        public mainImage:File,
        public coverPhoto:File,
        public name: string,
        public year: number,
        public price: number,
        public brandId: string,
        public description: string,
    ) {}

  }
