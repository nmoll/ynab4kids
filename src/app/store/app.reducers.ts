import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { budgetMonthReducer } from './budget-month/budget-month.reducer';
import { budgetReducer } from './budget/budget.reducer';
import { categoryReducer } from './category/category.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
  categoryState: categoryReducer,
  budgetState: budgetReducer,
  budgetMonthState: budgetMonthReducer
};
