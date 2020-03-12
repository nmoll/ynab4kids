import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBudgetMonthState } from './budget-month.state';

export const selectBudgetMonthState = createFeatureSelector<IBudgetMonthState>(
  'budgetMonthState'
);

export const selectCurrentBudgetMonth = createSelector(
  selectBudgetMonthState,
  state => state.currentBudgetMonth
);

export const selectLoaded = createSelector(
  selectBudgetMonthState,
  state => state.loaded
);

export const BudgetMonthSelectors = {
  selectCurrentBudgetMonth,
  selectLoaded
};
