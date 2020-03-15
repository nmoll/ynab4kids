import { createReducer, on } from '@ngrx/store';
import { BudgetMonthActions } from './budget-month.actions';
import {
  budgetMonthAdapter,
  initialBudgetMonthState
} from './budget-month.entity.state';

export const budgetMonthReducer = createReducer(
  initialBudgetMonthState,

  on(BudgetMonthActions.loadSuccess, (state, { budgetMonth }) =>
    budgetMonthAdapter.addOne(budgetMonth, state)
  )
);
