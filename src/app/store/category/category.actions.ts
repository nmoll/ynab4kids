import { createAction, props } from '@ngrx/store';
import { ICategory } from 'src/app/category/category';

export const CategoryActions = {
  updateCategoryBudget: createAction(
    '[Category] Update Category Budget',
    props<{ category: ICategory; amount: number }>()
  ),

  updateCategoryBudgetSuccess: createAction(
    '[Category] Update Category Budget Success',
    props<{ category: ICategory }>()
  )
};
