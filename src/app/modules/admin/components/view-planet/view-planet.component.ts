import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PlantsDetails } from 'src/app/modules/plants/models/getPlant-response.model';
import { PlantDetails } from 'src/app/modules/plants/models/plant-response.model';
import { PlantService } from 'src/app/modules/plants/services/plant.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LanguageService } from 'src/app/services/language.service';
import { AddPlanetComponent } from '../add-planet/add-planet.component';
import { PlantButtonsComponent } from '../plant-buttons/plant-buttons.component';
import { AdminService } from '../../services/admin.service';
import { PlantAdminDetails, PlantAdminResponse } from '../../models/plants-admin.model';

@Component({
  selector: 'app-view-planet',
  templateUrl: './view-planet.component.html',
  styleUrls: ['./view-planet.component.scss'],
  providers:[DialogService , MessageService]
})
export class ViewPlanetComponent  implements OnInit{
  private lang: any;
  public rowData:PlantAdminDetails[]=[];
  public columnDefs:ColDef[]=[];
  ref: DynamicDialogRef | undefined;
constructor(private messageService:MessageService, private adminService: AdminService  , private dialogService: DialogService,private plantService: PlantService , private commonService: CommonService , private langService: LanguageService){}

  ngOnInit(): void 
{
  this.columnInitialization()
  this.getPlants()
}

updatePlant(plant:any){
  this.ref = this.dialogService.open(AddPlanetComponent, { header: 'add Plant' , styleClass:'' ,width:'80%', data:{
    plant:plant
  }});
  this.ref.onClose.subscribe((plant: PlantAdminDetails) => {
    if (plant) {
       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
        this.getPlants()
    }
});
}

  removePlant(plantId: any) {
    this.commonService.removePlant(plantId).subscribe((result:any)=>{
       if(result.isSuccess){
        this.rowData = this.rowData.filter(item => item.plantId !== plantId);
       }
      
         })
  }

getPlants(){
  this.adminService.getPlantsWithoutLang().subscribe((result:PlantAdminResponse)=>{
    console.log(result)
    this.rowData = result.data;
   
  })
}
public showAddPlant(){
  this.ref = this.dialogService.open(AddPlanetComponent, { header: 'add Plant' , styleClass:'' , width:'80%'});
  this.ref.onClose.subscribe((plant: PlantAdminDetails) => {
    if (plant) {
       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adding Successfully' });
        this.getPlants()
    }
});
}

columnInitialization(){
  this.columnDefs = [
    {field:'#' , width:60 , valueGetter: 'node.rowIndex + 1'},
    {field:'plantNameEn' , headerName:'Plant Name' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'plantDescriptionEn' , headerName:'Description' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'plantSeasonEn' , headerName:'Season' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'plantCareDetailsEn' , headerName:'Care Details' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'plantMedicalBenefiEntEn' , headerName:'Medical Benefit' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'plantCategoryEn' , headerName:'Category' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'plantImage' , headerName:'Plant Image'  ,headerClass:'header-class' , flex:1 , cellRenderer:function(params:any){
    return `<img src="http://ayalilly-001-site1.atempurl.com/${params.value}" width="50px" hight="50px">`
    }},
    {field:'action' , headerName:'Actions'  ,headerClass:'header-class' , flex:1 , cellRenderer: PlantButtonsComponent},
  ]
}
gridOptions:GridOptions<any> = {
  context: { componentParent: this },
  rowSelection: 'multiple',
  domLayout: 'autoHeight',
  pagination: true,
  paginationPageSize: 10,
  overlayLoadingTemplate: `<span> Loading ... </span>`,
};
}
