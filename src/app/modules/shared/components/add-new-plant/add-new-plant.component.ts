import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PlantService } from 'src/app/modules/plants/services/plant.service';

@Component({
  selector: 'app-add-new-plant',
  templateUrl: './add-new-plant.component.html',
  styleUrls: ['./add-new-plant.component.scss']
})
export class AddNewPlantComponent  {
  
  public plantName!:string;
 @Output()orderSuccess = new EventEmitter<boolean>()
  constructor(private plantService: PlantService){}

  AddNewPLant(){
    if(this.plantName){
      this.plantService.addNewPlant({plantName:this.plantName}).subscribe((result:any)=>{
        if(result.isSuccess){
          this.plantName = ''
          this.orderSuccess.emit(true)
        }
      })
    }

  }

}
