import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { PlantsContainerComponent } from './components/plants-container/plants-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PlantDetailsComponent,
    PlantsContainerComponent
  ],
  imports: [
    CommonModule,
    PlantsRoutingModule,SharedModule
  ]
})
export class PlantsModule { }
