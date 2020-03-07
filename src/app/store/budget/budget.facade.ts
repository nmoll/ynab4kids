import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBudget } from 'src/app/budget/budget';
import { BudgetActions } from './budget.actions';
import { IBudgetEntityState } from './budget.entity.state';
import { BudgetSelectors } from './budget.selectors';

@Injectable({
  providedIn: 'root'
})
export class BudgetFacade {
  public budgets$: Observable<IBudget[]>;

  constructor(private store: Store<IBudgetEntityState>) {
    this.budgets$ = this.store.pipe(select(BudgetSelectors.getAllBugets));
  }

  public loadBudgets() {
    this.store.dispatch(BudgetActions.loadBudgets());
  }
}
