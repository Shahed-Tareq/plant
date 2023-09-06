import { Component , OnInit } from '@angular/core';
import { Plant } from '../../shared/models/plants.model';
import { Datum, Posts } from '../models/posts.model';
import { PostService } from '../services/post.service';
import { CommonService } from '../../shared/services/common.service';
import { LanguageService } from 'src/app/services/language.service';
import { GetAllPlantsResponse, PlantsDetails } from '../../plants/models/getPlant-response.model';


@Component({
  selector: 'app-community-container',
  templateUrl: './community-container.component.html',
  styleUrls: ['./community-container.component.scss']
})
export class CommunityContainerComponent implements OnInit{
posts!:Datum[]
plants:PlantsDetails[] = [];
constructor(private postService:PostService ,private commonService: CommonService , private langService: LanguageService){}

  ngOnInit(): void {
    this.getTopPosts()
    this.langService.languageChange.subscribe(newLang=>{
      const lang = newLang == 'en' ? 1 : 2;
      this.getAllPlants(lang)
     })
     const result = localStorage.getItem('lang')
     const lang = result == 'ar' ? 2 : 1;
     this.getAllPlants(lang)
 }




 private getAllPlants(langId:number){
    this.commonService.getAllPlants(langId).subscribe((result:GetAllPlantsResponse)=>{
      if(result.isSuccess){
        this.plants = result.data;
  }
    })
  }
  

getTopPosts(){
this.postService.getAllPosts().subscribe((result:Posts)=>{
this.posts= result.data;
})
}

}
