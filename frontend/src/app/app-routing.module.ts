import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GeneralComponent } from './general/general.component';
import { LoggedGeneralComponent } from './logged-general/logged-general.component';
import { AccountManagmentComponent } from './account-managment/account-managment.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProgressComponent } from './progress/progress.component';
import { AboutComponent } from './account-managment/content/about/about.component';
import { AccountSettingsComponent } from './account-managment/content/account-settings/account-settings.component';
import { CalculationSettingsComponent } from './account-managment/content/calculation-settings/calculation-settings.component';
import { GeneralSettingsComponent } from './account-managment/content/general-settings/general-settings.component';
import { SecuritySettingsComponent } from './account-managment/content/security-settings/security-settings.component';


const routes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'logged', component: LoggedGeneralComponent },
  {
    path: 'account', component: AccountManagmentComponent, children: [
      { path: 'about', component: AboutComponent },
      { path: 'accountSettings', component: AccountSettingsComponent },
      { path: 'calculationSettings', component: CalculationSettingsComponent },
      { path: 'generalSettings', component: GeneralSettingsComponent },
      { path: 'securitySettings', component: SecuritySettingsComponent }
    ]
  },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'progress', component: ProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
