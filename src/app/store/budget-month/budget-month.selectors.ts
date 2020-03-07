import { createFeatureSelector } from '@ngrx/store';
import { IBudgetMonth } from 'src/app/budget-month/budget-month';

export const getBudgetMonth = createFeatureSelector<IBudgetMonth>(
  'budgetMonthState'
);

export const BudgetMonthSelectors = {
  getBudgetMonth
};
