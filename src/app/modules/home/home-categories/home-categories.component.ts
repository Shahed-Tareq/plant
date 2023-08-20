import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';
import { Category } from '../../shared/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-categories',
  template: `
    <div class="container">
      <h4 class="title md:text-2xl xxs:text-xl font-bold text-[#070404ba] my-6"> {{"header.categories" | translate}} </h4>
    <div class="grid lg:grid-cols-4 gap-6  xs:grid-cols-1 sm:grid-cols-2">
    <div *ngFor="let category of categories.slice(0, 4)">
     <app-category [categoryObject]="category"> </app-category>
     
</div>

</div>
<div class="my-8 flex justify-center items-center w-full">
  <app-button text="{{'home.view' | translate}}" (clickButton)="navigateToCategories()"></app-button>
</div>
</div>
  `,
  styles: [
  ]
})
export class HomeCategoriesComponent implements OnInit {
  public categories:Category[] = [];
  
  constructor(private imageService: ImageServiceService , private router:Router){

  }

  ngOnInit(): void {
    this.imageService.getImages().then((images) => (this.categories = images));
  }


   public navigateToCategories():void{
  this.router.navigate(['/categories'])
   }
}
