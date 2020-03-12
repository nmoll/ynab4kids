import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { CategoryFacade } from '../store/category/category.facade';

@Injectable()
export class CategoryGuard implements CanActivate {
  constructor(private categoryFacade: CategoryFacade) {}

  public canActivate(): Observable<boolean> {
    return this.categoryFacade.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          this.categoryFacade.load();
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
