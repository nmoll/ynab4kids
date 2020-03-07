import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ICategory } from '../category/category';
import { CategoryButtonComponent } from '../category/category-button.component';
import { MoneyButtonComponent } from '../money/money-button.component';
import { CategoryFacade } from '../store/category/category.facade';

@Component({
  selector: 'app-budget-categorize',
  templateUrl: 'budget-categorize.page.html'
})
export class BudgetCategorizePage implements OnInit {
  @ViewChildren(MoneyButtonComponent)
  public moneyButtonRefs: QueryList<MoneyButtonComponent>;

  @ViewChildren(CategoryButtonComponent)
  public categoryButtonRefs: QueryList<CategoryButtonComponent>;

  constructor(public categoryFacade: CategoryFacade) {}

  public ngOnInit(): void {
    this.categoryFacade.loadCategories();
  }

  public onSelectCategory(category: ICategory): void {
    const selectedMoney = this.moneyButtonRefs.filter(
      moneyComp => moneyComp.selected
    );
    const categoryRef = this.categoryButtonRefs.find(
      categoryComp => categoryComp.category.id === category.id
    );
    const moneyTotal = selectedMoney.reduce(
      (acc, money) => acc + money.amount,
      0
    );
    const promises = selectedMoney.map(moneyComp =>
      moneyComp.animateTo(categoryRef.pigRef.nativeElement)
    );
    Promise.all(promises).then(() => {
      categoryRef.shake().then(() => {
        this.categoryFacade.updateCategoryBudget(category, moneyTotal);
      });
    });
  }
}
