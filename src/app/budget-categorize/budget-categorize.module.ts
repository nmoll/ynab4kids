import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BudgetMonthGuard } from '../budget-month/budget-month.guard';
import { CategoryButtonComponentModule } from '../category/category-button.module';
import { MoneyButtonComponentModule } from '../money/money-button.module';
import { BudgetCategorizePage } from './budget-categorize.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MoneyButtonComponentModule,
    CategoryButtonComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: BudgetCategorizePage,
        canActivate: [BudgetMonthGuard]
      }
    ])
  ],
  declarations: [BudgetCategorizePage],
  providers: [BudgetMonthGuard]
})
export class BudgetCategorizePageModule {}
