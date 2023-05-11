import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[container]',
})
export class ContainerDirective {
  constructor(private readonly el: ElementRef) {
    const element = this.el.nativeElement as HTMLElement;

    element.style.padding = '40px 20px';
  }
}
