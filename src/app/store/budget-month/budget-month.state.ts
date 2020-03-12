import { IBudgetMonth } from 'src/app/budget-month/budget-month';

export interface IBudgetMonthState {
  currentBudgetMonth: IBudgetMonth;
  loaded: boolean;
}

export const initialBudgetMonthState: IBudgetMonthState = {
  currentBudgetMonth: {
    toBeBudgeted: 0
  },
  loaded: false
};
