import { createReducer, on } from '@ngrx/store';
import { BudgetMonthActions } from '../budget-month/budget-month.actions';
import { CategoryActions } from './category.actions';
import { categoryAdapter, initialCategoryState } from './category.entity.state';

export const categoryReducer = createReducer(
  initialCategoryState,

  on(BudgetMonthActions.loadSuccess, (state, { budgetMonth }) => ({
    ...categoryAdapter.addMany(budgetMonth.categories, state)
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
