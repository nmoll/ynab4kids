import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, mapTo, take, tap } from 'rxjs/operators';
import { BudgetMonthFacade } from '../store/budget-month/budget-month.facade';

@Injectable()
export class BudgetMonthGuard implements CanActivate {
  constructor(private budgetMonthFacade: BudgetMonthFacade) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.budgetMonthFacade.currentBudgetMonth$.pipe(
      tap(budgetMonth => {
        console.log('can activate', budgetMonth);
        if (!budgetMonth) {
          this.budgetMonthFacade.load(route.paramMap.get('budgetId'));
        }
      }),
      filter(budgetMonth => !!budgetMonth),
      take(1),
      tap(budgetMonth => console.log('loaded budget month', budgetMonth)),
      mapTo(true)
    );
  }
}
