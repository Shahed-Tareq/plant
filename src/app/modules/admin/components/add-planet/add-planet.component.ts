import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { CategoryDetails, CategoryResponse } from 'src/app/modules/shared/models/category-response.mdoel';
import { AddPlantResponse } from 'src/app/modules/plants/models/plant-response.model';
import { LanguageService } from 'src/app/services/language.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoriesAdminDetails, CategoriesAdminResponse } from '../../models/categories-admin.model';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.scss']
})
export class AddPlanetComponent implements OnInit {
  public addPlanetForm!:FormGroup;
  public imageCategory:any;
  public categoriesArray!:CategoryDetails[];
  public isUpdated:boolean = false; 
  public plantDetails:any;
  public hasImage:boolean = false;
  public isExist:boolean = false;
  public CategoryImage:string = ''

  seasons = [
    {name: 'Winter' , value: 'winter'},
    {name: 'Summer' , value: 'summer'},
    {name: 'Spring' , value: 'spring'},
    {name: 'Autumn' , value: 'autumn'},
  ]
  arabicSeasons = [
    {name: 'الشتاء' , value: 'الشتاء'},
    {name: 'الصيف' , value: 'الصيف'},
    {name: 'الربيع' , value: 'الربيع'},
    {name: 'الخريف' , value: 'الخريف'},
  ]
  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef,private _fB:FormBuilder , private langService:LanguageService, private adminService:AdminService , private commonService: CommonService){}

  ngOnInit(): void {
    this.getAllCategories()
    this.FormInitialization();
    this.plantDetails = this.config.data.plant;
    this.patchPlantsDetails()
   }


  private FormInitialization():void{
    this.addPlanetForm = this._fB.group({
      plantName: [''],
      shortDescription: [''],
      careDetails: [''],
      season: [''],
      medicalBenefit: [''],
      image: [''],
      catId:[''],
      PlantNameAr:[''],
      DescriptionAr:[''],
      CareDetailsAr:[''],
      SeasonAr:[''],
      MedicalBenefitAr:['']
    })
  }



public selectPhoto(event:any){
this.hasImage = true;
const file = <File>event.target.files[0];
this.imageCategory = file;
var reader = new FileReader();
reader.onload = (data: any) => {
 this.CategoryImage = data.target.result;
};
reader.readAsDataURL(file);

}


onSubmit() {
  const formData: FormData = new FormData();
  const plantForm = this.addPlanetForm.value;
  formData.append('PlantName', this.addPlanetForm.get('plantName')?.value);
  formData.append('Description', this.addPlanetForm.get('shortDescription')?.value);
  formData.append('ImageFile', this.imageCategory);
  formData.append('CareDetails', this.addPlanetForm.get('careDetails')?.value);
  formData.append('Season', this.addPlanetForm.get('season')?.value);
  formData.append('MedicalBenefit', this.addPlanetForm.get('medicalBenefit')?.value);
  formData.append('CategoryId', this.addPlanetForm.get('catId')?.value);
  formData.append('PlantNameAr', this.addPlanetForm.get('PlantNameAr')?.value);
  formData.append('DescriptionAr', this.addPlanetForm.get('DescriptionAr')?.value);
  formData.append('CareDetailsAr', this.addPlanetForm.get('CareDetailsAr')?.value);
  formData.append('SeasonAr', this.addPlanetForm.get('SeasonAr')?.value);
  formData.append('MedicalBenefitAr', this.addPlanetForm.get('MedicalBenefitAr')?.value);
 if(this.isUpdated){
  formData.append('Id', this.plantDetails.plantId);
  this.adminService.updatePlant(formData).subscribe((result:any)=>{
    if(result.isSuccess){
      this.addPlanetForm.reset();
      this.hasImage = false;
      this.ref.close(plantForm);
    }
  })
 } else{
  this.adminService.addPlant(formData).subscribe((result:AddPlantResponse)=>{
    if(result.isSuccess){
     // TODO: add toast message to show that is done
     this.addPlanetForm.reset();
     this.hasImage = false;
     this.ref.close(plantForm);
    }
     })
 }
 
}

private getAllCategories(){
this.adminService.getCategoriesWithoutLang().subscribe((result:CategoriesAdminResponse)=>{
 if(result.isSuccess){
this.categoriesArray = result.data;
 }
})
}


public patchPlantsDetails(){
if(this.plantDetails){
  this.isUpdated = true;
  this.addPlanetForm.patchValue({
    plantName: this.plantDetails.plantNameEn,
      shortDescription: this.plantDetails.plantDescriptionEn,
      careDetails: this.plantDetails.plantCareDetailsEn,
      season: this.plantDetails.plantSeasonEn,
      medicalBenefit: this.plantDetails.plantMedicalBenefiEntEn,
      PlantNameAr:this.plantDetails.plantNameAr,
      DescriptionAr:this.plantDetails.descriptionAr,
      CareDetailsAr:this.plantDetails.plantCareDetailsAr,
      SeasonAr:this.plantDetails.plantSeasonAr,
      MedicalBenefitAr:this.plantDetails.plantMedicalBenefiEntAr,
      catId: this.plantDetails.plantCategoryEn
  })
  this.hasImage = true;
  this.CategoryImage = `http://ayalilly-001-site1.atempurl.com/${this.plantDetails.plantImage}`
}
}
}
