import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBudgetMonth } from '../budget-month/budget-month';
import { IBudget } from './budget';

const API_BASE_URL = 'https://api.youneedabudget.com/v1';
const headers = new HttpHeaders({
  Authorization:
    'Bearer b3483dee96e0c83a725f2bf582b9d63722abe3c0e7820037eedc9a2f37e55602'
});

interface YNABBudgetListResponse {
  data: {
    budgets: {
      id: string;
      name: string;
    }[];
  };
}

interface YNABBudgetMonthResponse {
  data: {
    month: {
      month: string;
      note: string;
      income: number;
      budgeted: number;
      activity: number;
      to_be_budgeted: number;
      age_of_money: number;
      deleted: boolean;
      categories: {
        id: string;
        category_group_id: string;
        name: string;
        hidden: boolean;
        original_category_group_id: string;
        note: string;
        budgeted: number;
        activity: number;
        balance: number;
        goal_type: 'TB';
        goal_creation_month: string;
        goal_target: number;
        goal_target_month: string;
        goal_percentage_complete: number;
        deleted: boolean;
      }[];
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  constructor(private httpClient: HttpClient) {}

  public list(): Observable<IBudget[]> {
    return this.httpClient
      .get<YNABBudgetListResponse>(`${API_BASE_URL}/budgets`, {
        headers
      })
      .pipe(map(res => res.data.budgets));
  }

  public getBudgetMonth(budgetId: string): Observable<IBudgetMonth> {
    return this.httpClient
      .get<YNABBudgetMonthResponse>(
        `${API_BASE_URL}/budgets/${budgetId}/months/current`,
        {
          headers
        }
      )
      .pipe(
        map(res => ({
          budgetId,
          toBeBudgeted: res.data.month.to_be_budgeted / 1000,
          categories: res.data.month.categories.map(category => ({
            id: category.id,
            budgetId,
            name: category.name,
            balance: category.balance / 1000,
            budgeted: category.budgeted / 1000
          }))
        }))
      );
  }
}
