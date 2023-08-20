import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant',
  template: `
    <div class="card bg-white rounded overflow-hidden shadow-md"> 
    <img [src]="categoryObject.itemImageSrc" class="w-full h-50 object-cover"> 
    <div class="py-4 px-4">
      <h3>{{categoryObject.title}}</h3>
      <p class = "text-sm my-3 text-justify text-[#3a3232f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, autem eligendi molestias maiores quae fugiat possimus fuga ipsam rem voluptas in hic eum ipsum architecto il</p>
      <div>
     
      <div class="w-full flex justify-between items-center">
        <app-button text="{{'home.viewBtn' | translate}}" (clickButton)="navigateToDetails(categoryObject.id)"> </app-button>
      <span class="cursor-pointer text-2xl">
        <i class="fa-solid fa-bookmark" *ngIf="categoryObject.isSaved"> </i>
        <i class="fa-regular fa-bookmark" *ngIf="!categoryObject.isSaved"> </i>
    </span>
        
</div>
  `,
  styles: [
  ]
})
export class PlantComponent {

  constructor(private router:Router){}

  @Input() categoryObject : Category = {} as Category;

  public navigateToDetails(plantId:any){
this.router.navigate([`plant/details/${plantId}`] )
  }
}
