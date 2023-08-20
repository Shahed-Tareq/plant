import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../../home/services/image-service.service';
import { Category } from '../../shared/models/category.model';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-view-categories',
  template: `
   <div class="search-bar w-full flex justify-center items-center h-[40vh]">
   <span class="p-input-icon-left w-[50%]">
    <i class="pi pi-search"></i>
    <input type="text" [(ngModel)]="searchTerm" ((keyup))="searchCategories()" (input)="searchCategories()" pInputText placeholder="{{'categories.search' | translate}}" class="pl-10 pr-3 py-2 font-semibold placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus-within:ring-2 w-full" />
</span>

  </div>
  
       <div class="container">
       <div class="flex justify-center items-center"> 
       
       </div>
      <h4 class="title text-[30px] font-bold text-[#070404ba] my-4"> {{"header.categories" | translate}} </h4>
    <div class="grid lg:grid-cols-4 gap-6  xs:grid-cols-1 sm:grid-cols-2">
    <div *ngFor="let category of categories">
     <app-category [categoryObject]="category"> </app-category>
     
</div>

</div>
</div>
  `,
  styles: [
    `
    .search-bar{
      width:100%;
      margin: 0px auto;
      margin-bottom:20px;
      background-image: url('https://images.pexels.com/photos/904621/pexels-photo-904621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position:relative;
    }
    `
  ]
})
export class ViewCategoriesComponent implements OnInit {
  public categories:Category[] = [];
  public searchTerm:string =''
  search=faSearch
  constructor(private imageService: ImageServiceService){

  }

  ngOnInit(): void {
    this.imageService.getImages().then((images) => (this.categories = images));
  }

  searchCategories() {
    this.categories = this.categories.filter(item =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } 
}
