import { Component } from '@angular/core';
import { AiService } from '../../service/ai.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent {

  constructor(private aiService:AiService){}
  public hasImage:boolean = false;
  public isExist:boolean = false;
  public plantImage:string = '';
  public imageFile:any;

 public selectPhoto(event:any){
 this.hasImage = true;
 const file = <File>event.target.files[0];
 this.imageFile = file;
 var reader = new FileReader();
 reader.onload = (data: any) => {
   this.plantImage = data.target.result;
 };
 reader.readAsDataURL(file);

 }

 public showPlantName(){
  this.isExist = !this.isExist;
  const formData = new FormData();
  formData.append('image' , this.imageFile)
  this.aiService.showImageResult(formData).subscribe((result:any)=>{
    console.log(result)
    this.imageFile = null;
  })
 }

 load(){
  console.log('reach to it ')
 }
}
