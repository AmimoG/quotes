import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.color = 'red';
    this.elem.nativeElement.style.fontsize = '26px';
   }

}
