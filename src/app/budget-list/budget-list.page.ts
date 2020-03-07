import { Component, OnInit } from '@angular/core';
import { BudgetFacade } from '../store/budget/budget.facade';

@Component({
  selector: 'app-budget-list',
  templateUrl: 'budget-list.page.html'
})
export class BudgetListPage implements OnInit {
  constructor(public budgetFacade: BudgetFacade) {}

  public ngOnInit(): void {
    this.budgetFacade.loadBudgets();
  }
}
