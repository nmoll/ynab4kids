import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BudgetMonthFacade } from '../store/budget-month/budget-month.facade';
import { BudgetFacade } from '../store/budget/budget.facade';
import { CategoryFacade } from '../store/category/category.facade';

@Component({
  selector: 'app-budget-detail',
  templateUrl: 'budget-detail.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetDetailPage {
  constructor(
    public budgetFacade: BudgetFacade,
    public categoryFacade: CategoryFacade,
    public budgetMonthFacade: BudgetMonthFacade
  ) {}
}
