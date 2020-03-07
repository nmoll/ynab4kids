import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPage {}
