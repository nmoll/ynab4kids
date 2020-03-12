import { createAction, props } from '@ngrx/store';
import { ICategory } from 'src/app/category/category';

export const CategoryActions = {
  load: createAction('[Category] Load'),

  loadSuccess: createAction(
    '[Category] Load Success',
    props<{ categories: ICategory[] }>()
  ),

  updateCategoryBudget: createAction(
    '[Category] Update Category Budget',
    props<{ category: ICategory; amount: number }>()
  ),

  updateCategoryBudgetSuccess: createAction(
    '[Category] Update Category Budget Success',
    props<{ category: ICategory }>()
  )
};
