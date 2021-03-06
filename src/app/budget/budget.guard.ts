import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { BudgetFacade } from '../store/budget/budget.facade';

@Injectable()
export class BudgetGuard implements CanActivate {
  constructor(private budgetFacade: BudgetFacade) {}

  public canActivate(): Observable<boolean> {
    return this.budgetFacade.loaded$.pipe(
      tap(isLoaded => {
        if (!isLoaded) {
          this.budgetFacade.load();
        }
      }),
      filter(isLoaded => isLoaded),
      take(1)
    );
  }
}
