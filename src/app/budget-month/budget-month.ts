import { ICategory } from '../category/category';

export interface IBudgetMonth {
  budgetId: string;
  toBeBudgeted: number;
  categories: ICategory[];
}
