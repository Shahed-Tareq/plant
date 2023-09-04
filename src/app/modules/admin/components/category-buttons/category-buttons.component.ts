import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-category-buttons',
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.scss']
})
export class CategoryButtonsComponent implements ICellRendererAngularComp{
  params:any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    console.log(params)
    console.log(params.data)
    this.params = params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  removeCategory(categoryId:any){
    this.params.context.componentParent.removeCategory(categoryId);
  }
  updateCategory(category:any){
    this.params.context.componentParent.updateCategory(category);
  }

}
