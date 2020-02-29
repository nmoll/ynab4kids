import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { categoryReducer } from './category/category.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
  categoryState: categoryReducer
};
