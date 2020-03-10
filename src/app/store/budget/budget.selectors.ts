import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterSelectors } from '../router/router.selectors';
import { budgetAdapter, IBudgetEntityState } from './budget.entity.state';
const selectBudgetState = createFeatureSelector<IBudgetEntityState>(
  'budgetState'
);

const { selectAll, selectEntities } = budgetAdapter.getSelectors(
  selectBudgetState
);

const selectSelectedBudgetId = RouterSelectors.selectRouteParam('budgetId');

const selectSelectedBudget = createSelector(
  selectEntities,
  selectSelectedBudgetId,
  (entities, budgetId) => entities[budgetId]
);

export const BudgetSelectors = {
  selectBudgets: selectAll,
  selectSelectedBudget
};
