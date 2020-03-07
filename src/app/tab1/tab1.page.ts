import { Component, OnInit } from '@angular/core';
import { BudgetFacade } from '../store/budget/budget.facade';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(public budgetFacade: BudgetFacade) {}

  public ngOnInit(): void {
    this.budgetFacade.loadBudgets();
  }
}
