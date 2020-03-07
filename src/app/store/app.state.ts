import { IBudgetEntityState } from './budget/budget.entity.state';
import { ICategoryEntityState } from './category/category.entity.state';

export interface IAppState {
  categoryState: ICategoryEntityState;
  budgetState: IBudgetEntityState;
}
