import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { CategoryComponent } from './components/category/category.component';
import { PlantComponent } from './components/plant/plant.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './components/button/button.component';
import { ChangeImageDirective } from './directives/change-image.directive';



const components = [CategoryComponent , PlantComponent]
const modules = [FontAwesomeModule , PrimengModule ,  FormsModule,TranslateModule ,ReactiveFormsModule]
@NgModule({
  declarations: [
    ...components,
    ChangeImageDirective,
    
  ],
  imports: [
    CommonModule,
   ...modules,
   ButtonComponent
  ] ,
  exports:[
    ...modules,
    ...components,
    ChangeImageDirective
  ]
})
export class SharedModule { }
