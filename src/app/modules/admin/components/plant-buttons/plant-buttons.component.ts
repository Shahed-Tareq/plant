import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-plant-buttons',
  templateUrl: './plant-buttons.component.html',
  styleUrls: ['./plant-buttons.component.scss']
})
export class PlantButtonsComponent implements ICellRendererAngularComp {
  params:any;
  agInit(params: ICellRendererParams<any, any, any>): void {
   this.params = params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
   return false;
  }
  removePlant(plantId:any){
    this.params.context.componentParent.removePlant(plantId);
  }
  updatePlant(plant:any){
    this.params.context.componentParent.updatePlant(plant);
  }

}
