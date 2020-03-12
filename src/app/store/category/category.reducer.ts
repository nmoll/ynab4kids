import { createReducer, on } from '@ngrx/store';
import { CategoryActions } from './category.actions';
import { categoryAdapter, initialCategoryState } from './category.entity.state';

export const categoryReducer = createReducer(
  initialCategoryState,

  on(CategoryActions.loadSuccess, (state, { categories }) => ({
    ...categoryAdapter.addAll(categories, state),
    loaded: true
  })),

  on(CategoryActions.updateCategoryBudgetSuccess, (state, { category }) =>
    categoryAdapter.updateOne(
      {
        id: category.id,
        changes: {
          ...category
        }
      },
      state
    )
  )
);
