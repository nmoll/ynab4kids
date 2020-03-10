import { RouterReducerState } from '@ngrx/router-store';
import { IBudgetMonth } from '../budget-month/budget-month';
import { IBudgetEntityState } from './budget/budget.entity.state';
import { ICategoryEntityState } from './category/category.entity.state';

export interface IAppState {
  routerState: RouterReducerState<any>;
  categoryState: ICategoryEntityState;
  budgetState: IBudgetEntityState;
  budgetMonthState: IBudgetMonth;
}
