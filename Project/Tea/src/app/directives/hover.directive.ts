import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private  element: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') HoverOn(){
    this.renderer.addClass(this.element.nativeElement, 'hovered');
  }

  @HostListener('mouseleave') HoverOff(){
    this.renderer.removeClass(this.element.nativeElement, 'hovered');
  }

}
