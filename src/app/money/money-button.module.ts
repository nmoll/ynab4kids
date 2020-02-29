import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CategoryButtonComponentModule } from '../category/category-button.module';
import { MoneyButtonComponent } from './money-button.component';

@NgModule({
  imports: [CommonModule, IonicModule, CategoryButtonComponentModule],
  declarations: [MoneyButtonComponent],
  exports: [MoneyButtonComponent]
})
export class MoneyButtonComponentModule {}
