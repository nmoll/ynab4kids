import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryButtonComponent } from './category-button.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CategoryButtonComponent],
  exports: [CategoryButtonComponent]
})
export class CategoryButtonComponentModule {}
