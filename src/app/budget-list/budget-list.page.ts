import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BudgetFacade } from '../store/budget/budget.facade';

@Component({
  selector: 'app-budget-list',
  templateUrl: 'budget-list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetListPage {
  constructor(public budgetFacade: BudgetFacade) {}
}
