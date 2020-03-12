import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';
import { ICategory } from 'src/app/category/category';
import { IAppState } from '../app.state';
import { CategoryActions } from './category.actions';
import { CategorySelectors } from './category.selectors';

@Injectable({
  providedIn: 'root'
})
export class CategoryEffects {
  constructor(private actions$: Actions, private store: Store<IAppState>) {}

  public load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.load),
      map(() =>
        CategoryActions.loadSuccess({
          categories: [
            {
              id: '1',
              name: 'Giving',
              balance: 0,
              budgeted: 0
            },
            {
              id: '2',
              name: 'Saving',
              balance: 0,
              budgeted: 0
            }
          ]
        })
      )
    )
  );

  public updateCategoryBudget = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.updateCategoryBudget),
      withLatestFrom(
        this.store.pipe(select(CategorySelectors.getCategoryEntities))
      ),
      map(([action, categoryEntities]) => {
        const category: ICategory = {
          ...categoryEntities[action.category.id],
          budgeted:
            categoryEntities[action.category.id].budgeted + action.amount,
          balance: categoryEntities[action.category.id].balance + action.amount
        };
        return CategoryActions.updateCategoryBudgetSuccess({
          category
        });
      })
    )
  );
}
