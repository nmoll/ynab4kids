import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { BudgetService } from 'src/app/budget/budget.service';
import { BudgetMonthActions } from './budget-month.actions';

@Injectable({
  providedIn: 'root'
})
export class BudgetMonthEffects {
  constructor(
    private actions$: Actions,
    private budgetService: BudgetService
  ) {}

  public load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetMonthActions.load),
      concatMap(({ budgetId }) => this.budgetService.getBudgetMonth(budgetId)),
      map(budgetMonth =>
        BudgetMonthActions.loadSuccess({
          budgetMonth
        })
      )
    )
  );
}
