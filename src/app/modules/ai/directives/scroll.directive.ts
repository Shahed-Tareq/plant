import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Output() reachedTarget = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const element = this.elementRef.nativeElement;
    const elementRect = element.getBoundingClientRect();

    // Check if the element is in the viewport
    if (elementRect.top <= window.innerHeight && elementRect.bottom >= 0) {
      this.reachedTarget.emit(true);
    }
  }

}
