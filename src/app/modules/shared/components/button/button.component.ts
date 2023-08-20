import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone:true
})
export class ButtonComponent {

  @Input() public text!:string;
  @Output() public clickButton = new EventEmitter();

  public buttonClicked(){
    this.clickButton.emit();
  }

}
