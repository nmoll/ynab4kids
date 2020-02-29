import { createFeatureSelector } from '@ngrx/store';
import { categoryAdapter, ICategoryEntityState } from './category.entity.state';

const getCategoryState = createFeatureSelector<ICategoryEntityState>(
  'categoryState'
);

const { selectAll, selectEntities } = categoryAdapter.getSelectors(
  getCategoryState
);

export const CategorySelectors = {
  getAllCategories: selectAll,
  getCategoryEntities: selectEntities
};
