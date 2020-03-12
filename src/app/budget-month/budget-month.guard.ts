import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { BudgetMonthFacade } from '../store/budget-month/budget-month.facade';

@Injectable()
export class BudgetMonthGuard implements CanActivate {
  constructor(private budgetMonthFacade: BudgetMonthFacade) {}

  public canActivate(): Observable<boolean> {
    return this.budgetMonthFacade.loaded$.pipe(
      tap(isLoaded => {
        if (!isLoaded) {
          this.budgetMonthFacade.load();
        }
      }),
      filter(isLoaded => isLoaded),
      take(1)
    );
  }
}
