import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { BudgetActions } from './budget.actions';

@Injectable({
  providedIn: 'root'
})
export class BudgetEffects {
  constructor(private actions$: Actions) {}

  public load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.load),
      map(() =>
        BudgetActions.loadSuccess({
          budgets: [
            {
              id: '1',
              name: 'Rowan'
            },
            {
              id: '2',
              name: 'Rosalie'
            },
            {
              id: '3',
              name: 'Mom and Dad'
            }
          ]
        })
      )
    )
  );
}
