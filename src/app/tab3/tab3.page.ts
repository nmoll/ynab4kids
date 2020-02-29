import { Component, OnInit } from '@angular/core';
import { ICategory } from '../category/category';
import { CategoryFacade } from '../store/category/category.facade';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  constructor(public categoryFacade: CategoryFacade) {}

  public ngOnInit(): void {
    this.categoryFacade.loadCategories();
  }

  public onSelectCategory(category: ICategory): void {
    this.categoryFacade.updateCategoryBudget(category, 0.25);
  }
}
