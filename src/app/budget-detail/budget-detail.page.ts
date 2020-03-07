import { Component, OnInit } from '@angular/core';
import { BudgetMonthFacade } from '../store/budget-month/budget-month.facade';
import { CategoryFacade } from '../store/category/category.facade';

@Component({
  selector: 'app-budget-detail',
  templateUrl: 'budget-detail.page.html'
})
export class BudgetDetailPage implements OnInit {
  constructor(
    public categoryFacade: CategoryFacade,
    public budgetMonthFacade: BudgetMonthFacade
  ) {}

  public ngOnInit(): void {
    this.categoryFacade.loadCategories();
    this.budgetMonthFacade.load();
  }
}