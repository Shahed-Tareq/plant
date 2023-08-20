import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-category',
  template: `
   <div class="card bg-white rounded overflow-hidden shadow-md" [@hoverAnimation]="animationState" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()"> 
    <img [src]="categoryObject.itemImageSrc" class="w-full h-80 object-cover"> 
    <div class="py-4 px-2">
      <h3>{{categoryObject.title}}</h3>
</div>
  `,
 animations: [
  trigger('hoverAnimation', [
    state('initial', style({
      // backgroundColor: 'white', // Example: Change the background color
      transform: 'scale(1)' ,// Example: Apply a transform
      cursor: 'default'
    })),
    state('hovered', style({
      // backgroundColor: '#ABE098', // Example: Change the background color
      transform: 'scale(1.1)' ,// Example: Apply a transform
      cursor: 'pointer'

    })),
    transition('initial <=> hovered', [
      animate('0.3s ease-in-out') // Animation duration and easing
    ])
  ])
],
  styles: [
  ]
})

export class CategoryComponent {
@Input() categoryObject : Category = {} as Category;

animationState = 'initial';

  onMouseEnter() {
    this.animationState = 'hovered';
  }

  onMouseLeave() {
    this.animationState = 'initial';
  }
}
