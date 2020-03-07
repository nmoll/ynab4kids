import { createFeatureSelector } from '@ngrx/store';
import { budgetAdapter, IBudgetEntityState } from './budget.entity.state';

const getBudgetState = createFeatureSelector<IBudgetEntityState>('budgetState');

const { selectAll } = budgetAdapter.getSelectors(getBudgetState);

export const BudgetSelectors = {
  getAllBugets: selectAll
};
