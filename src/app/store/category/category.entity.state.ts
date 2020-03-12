import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ICategory } from 'src/app/category/category';

export interface ICategoryEntityState extends EntityState<ICategory> {
  loaded: boolean;
}

export const categoryAdapter = createEntityAdapter<ICategory>();

export const initialCategoryState: ICategoryEntityState = categoryAdapter.getInitialState(
  {
    loaded: false
  }
);
