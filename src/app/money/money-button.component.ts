import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-money-button',
  templateUrl: 'money-button.component.html'
})
export class MoneyButtonComponent {
  @Input()
  public amount: number;

  public selected: boolean;
}
