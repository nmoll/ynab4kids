import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BudgetMonthGuard } from '../budget-month/budget-month.guard';
import { BudgetGuard } from '../budget/budget.guard';
import { CategoryButtonComponentModule } from '../category/category-button.module';
import { CategoryGuard } from '../category/category.guard';
import { BudgetDetailPage } from './budget-detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CategoryButtonComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: BudgetDetailPage,
        canActivate: [BudgetGuard, BudgetMonthGuard, CategoryGuard]
      }
    ])
  ],
  declarations: [BudgetDetailPage],
  providers: [BudgetGuard, BudgetMonthGuard, CategoryGuard]
})
export class BudgetDetailPageModule {}
