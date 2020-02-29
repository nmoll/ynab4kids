import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-money-button',
  templateUrl: 'money-button.component.html'
})
export class MoneyButtonComponent {
  @ViewChild('money', { static: false })
  public elementRef: ElementRef;

  @Input()
  public amount: number;

  public selected: boolean;

  constructor(private animationController: AnimationController) {}

  public onClick(): void {
    console.log('click');
    this.animationController
      .create()
      .addElement(this.elementRef.nativeElement)
      .duration(100)
      .fromTo(
        'transform',
        `scale(${this.selected ? '1.2' : '1'})`,
        `scale(${this.selected ? '1' : '1.2'})`
      )
      .play();
    this.selected = !this.selected;
    // this.animationController
    //   .create()
    //   .addElement(this.elementRef.nativeElement)
    //   .duration(1000)
    //   .fromTo('transform', 'translate(0px, 0px)', 'translate(100px, 200px)')
    //   .fromTo('opacity', '1', '0.2')

    //   .afterStyles({
    //     display: 'none'
    //   })
    //   .play();
  }
}
