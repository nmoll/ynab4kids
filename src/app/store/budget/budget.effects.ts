import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { BudgetService } from 'src/app/budget/budget.service';
import { BudgetActions } from './budget.actions';

@Injectable({
  providedIn: 'root'
})
export class BudgetEffects {
  constructor(
    private actions$: Actions,
    private budgetService: BudgetService
  ) {}

  public load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.load),
      concatMap(() =>
        this.budgetService.list().pipe(
          map(budgets =>
            BudgetActions.loadSuccess({
              budgets
            })
          )
        )
      )
    )
  );
}
