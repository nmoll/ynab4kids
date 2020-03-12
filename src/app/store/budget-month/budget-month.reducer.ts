import { createReducer, on } from '@ngrx/store';
import { BudgetMonthActions } from './budget-month.actions';
import { initialBudgetMonthState } from './budget-month.state';

export const budgetMonthReducer = createReducer(
  initialBudgetMonthState,

  on(BudgetMonthActions.loadSuccess, (_, { budgetMonth }) => ({
    currentBudgetMonth: budgetMonth,
    loaded: true
  }))
);
