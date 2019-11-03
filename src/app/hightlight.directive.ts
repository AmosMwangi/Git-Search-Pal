import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private elem: ElementRef) { }
  @HostBinding('style.backgroundColor')backgroundColor = 'transparent';
  @HostListener('mouseover') mouseover(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'blue';
    this.elem.nativeElement.style.color = 'White';
}
@HostListener('mouseleave') mouseleave(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'transparent';
    this.elem.nativeElement.style.color = 'white';
}
  gnOninit() {
    this.elem.nativeElement.style.backgroundColor = 'blue';
    this.elem.nativeElement.style.color = 'black';
  }
}
