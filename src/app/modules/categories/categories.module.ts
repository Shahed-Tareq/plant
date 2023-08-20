import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ViewCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
SharedModule
  ]
})
export class CategoriesModule { }
