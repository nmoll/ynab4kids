import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categoryAdapter, ICategoryEntityState } from './category.entity.state';

const selectCategoryState = createFeatureSelector<ICategoryEntityState>(
  'categoryState'
);

const { selectAll, selectEntities } = categoryAdapter.getSelectors(
  selectCategoryState
);

const selectCurrentBudgetCategories = createSelector(
  selectAll,
  categories => categories
);

export const CategorySelectors = {
  selectCategories: selectAll,
  selectCategoryEntities: selectEntities,
  selectCurrentBudgetCategories
};
