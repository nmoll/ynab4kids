import { Component, OnInit } from '@angular/core';
import { CategoryFacade } from '../store/category/category.facade';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  constructor(public categoryFacade: CategoryFacade) {}

  public ngOnInit(): void {
    this.categoryFacade.loadCategories();
  }
}
