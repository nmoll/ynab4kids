import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html'
})
export class CategoryButtonComponent {
  @Input()
  public amount: number;

  @Input()
  public name: string;

  @Output()
  public select = new EventEmitter<void>();
}
