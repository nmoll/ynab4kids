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
  }

  public animateTo(element: HTMLElement): Promise<void> {
    let resolver;
    const promise = new Promise<void>(r => (resolver = r));

    const distanceX =
      element.getBoundingClientRect().left -
      this.elementRef.nativeElement.getBoundingClientRect().left;
    const distanceY =
      element.getBoundingClientRect().top -
      this.elementRef.nativeElement.getBoundingClientRect().top;

    this.animationController
      .create()
      .addElement(this.elementRef.nativeElement)
      .duration(500)
      .fromTo(
        'transform',
        'translate(0px, 0px) scale(1)',
        `translate(${distanceX}px, ${distanceY}px) scale(0.4)`
      )
      .fromTo('opacity', '1', '0.2')
      .afterStyles({
        display: 'none'
      })
      .onFinish(() => resolver())
      .play();

    return promise;
  }
}
