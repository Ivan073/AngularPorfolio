import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private  element: ElementRef,
              private renderer: Renderer2) {
    //this.border();
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeClass(this.element.nativeElement, 'highlight');
  }

 /* border() {
    this.renderer.addClass(this.element.nativeElement, 'highlight');
  }*/
}
