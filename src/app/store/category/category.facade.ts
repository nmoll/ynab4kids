import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/category/category';
import { CategoryActions } from './category.actions';
import { ICategoryEntityState } from './category.entity.state';
import { CategorySelectors } from './category.selectors';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  public categories$: Observable<ICategory[]>;
  public loaded$: Observable<boolean>;

  constructor(private store: Store<ICategoryEntityState>) {
    this.categories$ = this.store.pipe(
      select(CategorySelectors.getAllCategories)
    );
    this.loaded$ = this.store.pipe(select(CategorySelectors.selectLoaded));
  }

  public load() {
    this.store.dispatch(CategoryActions.load());
  }

  public updateCategoryBudget(category: ICategory, amount: number) {
    console.log('update budgetd', category, amount);
    this.store.dispatch(
      CategoryActions.updateCategoryBudget({
        category,
        amount
      })
    );
  }
}
