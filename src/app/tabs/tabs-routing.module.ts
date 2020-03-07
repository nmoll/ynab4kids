import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'budgets',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../budget-list/budget-list.module').then(
                m => m.BudgetListPageModule
              )
          }
        ]
      },
      {
        path: 'budgets/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../budget-detail/budget-detail.module').then(
                m => m.BudgetDetailPageModule
              )
          }
        ]
      },
      {
        path: 'budgets/:id/categorize',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../budget-categorize/budget-categorize.module').then(
                m => m.BudgetCategorizePageModule
              )
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/budets',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/budgets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
