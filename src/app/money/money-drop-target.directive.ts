import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMoneyDropTarget]'
})
export class MoneyDropTargetDirective {
  constructor(elementRef: ElementRef) {}
}
