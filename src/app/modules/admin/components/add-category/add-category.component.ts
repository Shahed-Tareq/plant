import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{
  addCategoryForm!:FormGroup;
  imageCategory:any = null;
  categoryImageEdit:any;
  message: any;
  categoryDetails:any;
  public isUpdate:boolean = false;
  constructor(private _fB:FormBuilder , private adminService: AdminService, private ref: DynamicDialogRef, private dynamicConfig: DynamicDialogConfig){}


  ngOnInit(): void {
    this.FormInitialization();
   this.categoryDetails = this.dynamicConfig.data.category
    this.patchValue()
  }
  patchValue() {
     const data = this.dynamicConfig.data;
   if (data){
    this.isUpdate = true;
    this.addCategoryForm.patchValue({
        category_name: data.category.categoryName,
         short_description: data.category.description,
        CategoryNameAr:data.category.categoryNameAr,
         DescriptionAr:data.category.descriptionAr
      })
      this.hasImage = true;
      this.categoryImageEdit = `http://ayalilly-001-site1.atempurl.com/${data.category.image}` 
     }
  }


  private FormInitialization():void{
    this.addCategoryForm = this._fB.group({
      category_name: [''],
      short_description: [''],
      image: [''],
      CategoryNameAr:[''],
      DescriptionAr:['']
    })
  }

  public hasImage:boolean = false;
public isExist:boolean = false;


public selectPhoto(event:any){
this.hasImage = true;
const file = <File>event.target.files[0];
this.imageCategory = file;
var reader = new FileReader();
reader.onload = (data: any) => {
 this.categoryImageEdit = data.target.result;
};
reader.readAsDataURL(file);

}


onSubmit() {
const categoryForm = this.addCategoryForm.value;
  const formData: FormData = new FormData();
  formData.append('CategoryName', this.addCategoryForm.get('category_name')?.value);
  formData.append('DescriptionAr', this.addCategoryForm.get('DescriptionAr')?.value);
  formData.append('CategoryNameAr', this.addCategoryForm.get('CategoryNameAr')?.value);
  formData.append('Description', this.addCategoryForm.get('short_description')?.value);
  formData.append('ImageFile', this.imageCategory);
 if(this.isUpdate){
  formData.append('CategoryId', this.categoryDetails.id);
  this.adminService.updateCategory(formData).subscribe((result:any)=>{
    if(result.isSuccess){
      this.addCategoryForm.reset();
      this.hasImage= false;
      this.ref.close(categoryForm);
    }
  })
 } else{
  this.adminService.addCategory(formData).subscribe((result:any)=>{
    if(result.isSuccess){
      this.addCategoryForm.reset();
      this.hasImage= false;
      this.ref.close(categoryForm);
    } else{
      this.message = result.message;
    }

  })
 }
  
}

}
