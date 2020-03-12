import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoryButtonComponentModule } from '../category/category-button.module';
import { CategoryGuard } from '../category/category.guard';
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
        canActivate: [CategoryGuard]
      }
    ])
  ],
  declarations: [BudgetCategorizePage],
  providers: [CategoryGuard]
})
export class BudgetCategorizePageModule {}
