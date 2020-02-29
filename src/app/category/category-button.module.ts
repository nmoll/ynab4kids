import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CategoryButtonComponent } from './category-button.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CategoryButtonComponent],
  exports: [CategoryButtonComponent]
})
export class CategoryButtonComponentModule {}
