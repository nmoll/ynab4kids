import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IBudget } from 'src/app/budget/budget';

export interface IBudgetEntityState extends EntityState<IBudget> {}

export const budgetAdapter = createEntityAdapter<IBudget>();

export const initialBudgetState: IBudgetEntityState = budgetAdapter.getInitialState();
