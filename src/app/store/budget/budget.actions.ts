import { createAction, props } from '@ngrx/store';
import { IBudget } from 'src/app/budget/budget';

export const BudgetActions = {
  load: createAction('[Budget] Load'),

  loadSuccess: createAction(
    '[Budget] Load Success',
    props<{ budgets: IBudget[] }>()
  )
};
