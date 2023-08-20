import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.scss']
})
export class AddPlanetComponent implements OnInit {
  addPlanetForm!:FormGroup;
  imageCategory:any;
  constructor(private _fB:FormBuilder){}


  ngOnInit(): void {
    this.FormInitialization();
  }


  private FormInitialization():void{
    this.addPlanetForm = this._fB.group({
      category_name: [''],
      short_description: [''],
      careDetails: [''],
      season: [''],
      medicalBenefit: [''],
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
  formData.append('category_name', this.addPlanetForm.get('category_name')?.value);
  formData.append('short_description', this.addPlanetForm.get('short_description')?.value);
  formData.append('image', this.CategoryImage);
 
}
}
