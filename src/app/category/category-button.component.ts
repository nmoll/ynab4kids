import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ICategory } from './category';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryButtonComponent {
  @ViewChild('pigRef', { static: false })
  public pigRef: ElementRef;

  @Input()
  public category: ICategory;

  @Output()
  public select = new EventEmitter<void>();

  constructor(private animationController: AnimationController) {}

  public shake(): Promise<void> {
    let resolver;
    const promise = new Promise<void>(r => (resolver = r));

    this.animationController
      .create()
      .addElement(this.pigRef.nativeElement)
      .duration(100)
      .iterations(3)
      .keyframes([
        { offset: 0, transform: 'translate(0, 0)' },
        { offset: 0.3, transform: 'translate(5px, 0)' },
        { offset: 0.6, transform: 'translate(-5px, 0)' },
        { offset: 1, transform: 'translate(0, 0)' }
      ])
      .onFinish(() => resolver())
      .play();

    return promise;
  }
}
