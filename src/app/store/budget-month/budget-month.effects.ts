import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { BudgetMonthActions } from './budget-month.actions';

@Injectable({
  providedIn: 'root'
})
export class BudgetMonthEffects {
  constructor(private actions$: Actions) {}

  public load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetMonthActions.load),
      map(() =>
        BudgetMonthActions.loadSuccess({
          budgetMonth: {
            toBeBudgeted: 1.25
          }
        })
      )
    )
  );
}
