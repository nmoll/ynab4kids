import { RouterReducerState } from '@ngrx/router-store';
import { IBudgetMonthEntityState } from './budget-month/budget-month.entity.state';
import { IBudgetEntityState } from './budget/budget.entity.state';
import { ICategoryEntityState } from './category/category.entity.state';

export interface IAppState {
  routerState: RouterReducerState<any>;
  categoryState: ICategoryEntityState;
  budgetState: IBudgetEntityState;
  budgetMonthState: IBudgetMonthEntityState;
}
