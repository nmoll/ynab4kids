import { createAction, props } from '@ngrx/store';
import { IBudget } from 'src/app/budget/budget';

export const BudgetActions = {
  loadBudgets: createAction('[Budget] Load Budgets'),

  loadBudgetsSuccess: createAction(
    '[Budget] Load Budgets Success',
    props<{ budgets: IBudget[] }>()
  )
};
