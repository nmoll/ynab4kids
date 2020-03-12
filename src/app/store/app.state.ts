import { RouterReducerState } from '@ngrx/router-store';
import { IBudgetMonthState } from './budget-month/budget-month.state';
import { IBudgetEntityState } from './budget/budget.entity.state';
import { ICategoryEntityState } from './category/category.entity.state';

export interface IAppState {
  routerState: RouterReducerState<any>;
  categoryState: ICategoryEntityState;
  budgetState: IBudgetEntityState;
  budgetMonthState: IBudgetMonthState;
}
