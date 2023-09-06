import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { PlantsContainerComponent } from './components/plants-container/plants-container.component';

const routes: Routes = [
  {path: '' , redirectTo: 'plants' , pathMatch:'full'},
  {path: 'plants' , component:PlantsContainerComponent},
  {path:'details/:id' , component:PlantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantsRoutingModule { }
