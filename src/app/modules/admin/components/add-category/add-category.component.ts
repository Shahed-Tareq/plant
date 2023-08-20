import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{
  addCategoryForm!:FormGroup;
  imageCategory:any;
  constructor(private _fB:FormBuilder){}


  ngOnInit(): void {
    this.FormInitialization();
  }


  private FormInitialization():void{
    this.addCategoryForm = this._fB.group({
      category_name: [''],
      short_description: [''],
      image: ['']
    })
  }

  public hasImage:boolean = false;
public isExist:boolean = false;
public CategoryImage:string = ''

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
  formData.append('category_name', this.addCategoryForm.get('category_name')?.value);
  formData.append('short_description', this.addCategoryForm.get('short_description')?.value);
  formData.append('image', this.CategoryImage);
 
}

}
