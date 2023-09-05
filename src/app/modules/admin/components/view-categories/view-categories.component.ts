import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryDetails } from 'src/app/modules/shared/models/category-response.mdoel';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LanguageService } from 'src/app/services/language.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { MessageService } from 'primeng/api';
import { CategoryButtonsComponent } from '../category-buttons/category-buttons.component';
import { AdminService } from '../../services/admin.service';
import { CategoriesAdminDetails, CategoriesAdminResponse } from '../../models/categories-admin.model';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss'],
  providers: [DialogService , MessageService]
})
export class ViewCategoriesComponent implements OnInit{
  public rowData:CategoriesAdminDetails[] = [];
  public columnDefs: ColDef[] =[];
  public categories!: CategoryDetails[];
  ref: DynamicDialogRef | undefined;
  constructor(private adminService: AdminService,private messageService:MessageService,private commonService: CommonService , private langService: LanguageService, public dialogService: DialogService){}
  ngOnInit(): void {
    this.columnInitialization()
    this.getAllCategories()
  

  }
  getAllCategories() {
   this.adminService.getCategoriesWithoutLang().subscribe((result:CategoriesAdminResponse)=>{
    console.log(result)
    this.rowData = result.data;
   })
  }
  

  updateCategory(category: any) {
    this.ref = this.dialogService.open(AddCategoryComponent, { header: 'add Category' , styleClass:'addCategory' , data:{
      category:category
    }});
    this.ref.onClose.subscribe((product: any) => {
      if (product) {
         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
          this.getAllCategories()
      }
  });
  }

  removeCategory(categoryId: any) {
    this.commonService.removeCategory(categoryId).subscribe((result:any)=>{
      this.rowData = this.rowData.filter(item => item.id !== categoryId);

    })
  }



columnInitialization(){
  this.columnDefs = [
    {field:'#' , width:60 , valueGetter: 'node.rowIndex + 1'},
    {field:'categoryName' , headerName:'Category Name' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'description' , headerName:'Description' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'image' , headerName:'Category Image'  ,headerClass:'header-class' , flex:1 , cellRenderer:function(params:any){
    return `<img src="http://ayalilly-001-site1.atempurl.com/${params.value}" width="50px" hight="50px">`
    }},
    {field:'action' , headerName:'Actions'  ,headerClass:'header-class' , flex:1 , cellRenderer:CategoryButtonsComponent},
  ]
}

showAddCategory() {
  this.ref = this.dialogService.open(AddCategoryComponent, { header: 'add Category' , styleClass:'addCategory'});

  this.ref.onClose.subscribe((product: any) => {
    if (product) {
       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adding Successfully' });
        this.getAllCategories()
    }
});
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