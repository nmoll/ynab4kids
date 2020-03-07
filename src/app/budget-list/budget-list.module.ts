import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoryButtonComponentModule } from '../category/category-button.module';
import { BudgetListPage } from './budget-list.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CategoryButtonComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: BudgetListPage
      }
    ])
  ],
  declarations: [BudgetListPage]
})
export class BudgetListPageModule {}
