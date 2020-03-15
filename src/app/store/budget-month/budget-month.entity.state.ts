import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IBudgetMonth } from 'src/app/budget-month/budget-month';

export interface IBudgetMonthEntityState extends EntityState<IBudgetMonth> {}

export const budgetMonthAdapter = createEntityAdapter<IBudgetMonth>({
  selectId: budgetMonth => budgetMonth.budgetId
});

export const initialBudgetMonthState: IBudgetMonthEntityState = budgetMonthAdapter.getInitialState();
