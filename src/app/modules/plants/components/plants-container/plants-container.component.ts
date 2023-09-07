import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LanguageService } from 'src/app/services/language.service';
import { GetAllPlantsResponse, PlantsDetails } from '../../models/getPlant-response.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-plants-container',
  templateUrl: './plants-container.component.html',
  styleUrls: ['./plants-container.component.scss'],
  providers:[MessageService]
})
export class PlantsContainerComponent implements OnInit  {
  public searchTerm:any;
  public loading:boolean = false;
plants:PlantsDetails[]=[]
public lang!:number;
public plantsCopy:any;
  constructor(private messageService:MessageService,public authService: AuthService,private langService:LanguageService ,private plantService: PlantService , private commonService: CommonService){}
  ngOnInit(): void {
    this.langService.languageChange.subscribe(newLang=>{
      this.lang = newLang == 'en' ? 1 : 2;
      this.getAllPlants(this.lang)
     })
     const result = localStorage.getItem('lang')
     this.lang = result == 'ar' ? 2 : 1;
     this.getAllPlants(  this.lang)
  }

searchPlant(){
    if(this.searchTerm.trim()){
      this.commonService.categorySearch(this.searchTerm , this.lang).subscribe((result:any)=>{
    if(result.isSuccess){
      this.plants = result.data;
    } 
      })
    }
    else{
      this.plants = this.plantsCopy;
  }
    
   }

  getAllPlants(langId:any){
    this.commonService.getAllPlants(langId).subscribe((result:GetAllPlantsResponse)=>{
      if(result.isSuccess){
        this.plants = result.data;
        this.plantsCopy = this.plants;
  }
    })
  }

showSuccessMessage(){
 this.messageService.add({ severity: 'success', summary: 'Success', detail: 'added Successfully' });
}
}
