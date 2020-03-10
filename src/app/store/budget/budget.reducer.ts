import { createReducer, on } from '@ngrx/store';
import { BudgetActions } from './budget.actions';
import { budgetAdapter, initialBudgetState } from './budget.entity.state';

export const budgetReducer = createReducer(
  initialBudgetState,

  on(BudgetActions.loadBudgetsSuccess, (state, { budgets }) => ({
    ...budgetAdapter.addAll(budgets, state),
    loaded: true
  }))
);
