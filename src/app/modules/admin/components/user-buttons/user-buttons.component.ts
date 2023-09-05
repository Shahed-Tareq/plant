import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-user-buttons',
  templateUrl: './user-buttons.component.html',
  styleUrls: ['./user-buttons.component.scss']
})
export class UserButtonsComponent implements ICellRendererAngularComp{
  params:any;
  agInit(params: ICellRendererParams<any, any, any>): void {
this.params = params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
  lockedUser(userId:any){
this.params.context.componentParent.lockedUser(userId)
}
unLockUser(userId:any){
  this.params.context.componentParent.unLockUser(userId)
}
}
