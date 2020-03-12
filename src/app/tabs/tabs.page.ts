import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPage {
  constructor() {}
}
