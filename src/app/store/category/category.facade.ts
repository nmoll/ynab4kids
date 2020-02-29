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

  constructor(private store: Store<ICategoryEntityState>) {
    this.categories$ = this.store.pipe(
      select(CategorySelectors.getAllCategories)
    );
  }

  public loadCategories() {
    this.store.dispatch(CategoryActions.loadCategories());
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
