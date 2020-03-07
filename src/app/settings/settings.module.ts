import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }])
  ],
  declarations: [SettingsPage]
})
export class SettingsModule {}
