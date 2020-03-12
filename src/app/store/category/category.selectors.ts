import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categoryAdapter, ICategoryEntityState } from './category.entity.state';

const selectCategoryState = createFeatureSelector<ICategoryEntityState>(
  'categoryState'
);

const { selectAll, selectEntities } = categoryAdapter.getSelectors(
  selectCategoryState
);

const selectLoaded = createSelector(selectCategoryState, state => state.loaded);

export const CategorySelectors = {
  getAllCategories: selectAll,
  getCategoryEntities: selectEntities,
  selectLoaded
};
