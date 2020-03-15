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
  public currentBudgetCategories$: Observable<ICategory[]>;

  constructor(private store: Store<ICategoryEntityState>) {
    this.currentBudgetCategories$ = this.store.pipe(
      select(CategorySelectors.selectCurrentBudgetCategories)
    );
  }

  public updateCategoryBudget(category: ICategory, amount: number) {
    this.store.dispatch(
      CategoryActions.updateCategoryBudget({
        category,
        amount
      })
    );
  }
}
