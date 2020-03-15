import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BudgetSelectors } from '../budget/budget.selectors';
import {
  budgetMonthAdapter,
  IBudgetMonthEntityState
} from './budget-month.entity.state';

const selectBudgetMonthState = createFeatureSelector<IBudgetMonthEntityState>(
  'budgetMonthState'
);

const { selectEntities } = budgetMonthAdapter.getSelectors(
  selectBudgetMonthState
);

const selectCurrentBudgetMonth = createSelector(
  selectEntities,
  BudgetSelectors.selectSelectedBudgetId,
  (entities, budgetId) => entities[budgetId]
);

export const BudgetMonthSelectors = {
  selectCurrentBudgetMonth
};
