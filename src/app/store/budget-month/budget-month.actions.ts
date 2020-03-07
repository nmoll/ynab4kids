import { createAction, props } from '@ngrx/store';
import { IBudgetMonth } from 'src/app/budget-month/budget-month';

export const BudgetMonthActions = {
  load: createAction('[Budget Month] Load'),

  loadSuccess: createAction(
    '[Budget Month] Load Success',
    props<{ budgetMonth: IBudgetMonth }>()
  )
};
