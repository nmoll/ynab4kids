import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MoneyButtonComponent } from './money-button.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MoneyButtonComponent],
  exports: [MoneyButtonComponent]
})
export class MoneyButtonComponentModule {}
