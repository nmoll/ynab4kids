import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBudgetMonth } from 'src/app/budget-month/budget-month';
import { BudgetMonthActions } from './budget-month.actions';
import { BudgetMonthSelectors } from './budget-month.selectors';

@Injectable({
  providedIn: 'root'
})
export class BudgetMonthFacade {
  public currentBudgetMonth$: Observable<IBudgetMonth>;

  constructor(private store: Store<IBudgetMonth>) {
    this.currentBudgetMonth$ = this.store.pipe(
      select(BudgetMonthSelectors.selectCurrentBudgetMonth)
    );
  }

  public load(budgetId: string): void {
    this.store.dispatch(BudgetMonthActions.load({ budgetId }));
  }
}
