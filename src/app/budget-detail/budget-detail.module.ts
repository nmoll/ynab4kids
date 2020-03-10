import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BudgetGuard } from '../budget/budget.guard';
import { CategoryButtonComponentModule } from '../category/category-button.module';
import { BudgetDetailPage } from './budget-detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CategoryButtonComponentModule,
    RouterModule.forChild([
      { path: '', component: BudgetDetailPage, canActivate: [BudgetGuard] }
    ])
  ],
  declarations: [BudgetDetailPage],
  providers: [BudgetGuard]
})
export class BudgetDetailPageModule {}
