import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { ImageServiceService } from '../services/image-service.service';

@Component({
  selector: 'app-home-plants',
  template: `
    
    <div class="container">
  <h4 class="title md:text-2xl xxs:text-xl font-bold text-[#070404ba] mt-6"> {{"community.plants" | translate}} </h4>
  <p class="mb-6 text-[#665f5f] font-regular"> Lorem ipsum dolor sit amet consectetur,  sit libero animi nobis, similique</p>

<p-carousel [value]="categories.slice(0, 8)" [numVisible]="4" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
    <ng-template let-category pTemplate="item">
    <div class="border-1 surface-border border-round m-2  py-5 px-3">
    <app-plant [categoryObject]="category"> </app-plant>
</div>
    </ng-template>
</p-carousel>

    </div>
  `,
  styles: [
  ]
})
export class HomePlantsComponent implements OnInit {
  public categories:Category[] = [];
  responsiveOptions!: any[];
  constructor(private imageService: ImageServiceService){

  }

  ngOnInit(): void {
    this.imageService.getImages().then((images) => (this.categories = images));
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      },
      {
        breakpoint: '400px',
        numVisible: 1,
        numScroll: 1
    }
  ];
  }
}
