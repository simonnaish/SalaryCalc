import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GeneralComponent } from './general/general.component';
import { LoggedGeneralComponent } from './logged-general/logged-general.component';
import { AccountManagmentComponent } from './logged-general/account-managment/account-managment.component';
import { StatisticsComponent } from './logged-general/statistics/statistics.component';
import { ProgressComponent } from './logged-general/progress/progress.component';
import { AboutComponent } from './logged-general/account-managment/content/about/about.component';
import { AccountSettingsComponent } from './logged-general/account-managment/content/account-settings/account-settings.component';
import { CalculationSettingsComponent } from './logged-general/account-managment/content/calculation-settings/calculation-settings.component';
import { GeneralSettingsComponent } from './logged-general/account-managment/content/general-settings/general-settings.component';
import { SecuritySettingsComponent } from './logged-general/account-managment/content/security-settings/security-settings.component';
import { DataResolverService } from './reuseable/resolver/data-resolver.service';


const routes: Routes = [
  {path:'', redirectTo:'general', pathMatch:'full'},
  { path: 'general', component: GeneralComponent },
  { path: 'logged', component: LoggedGeneralComponent, resolve:{days:DataResolverService} },
  {
    path: 'account', component: AccountManagmentComponent, children: [
      { path: '', redirectTo:'about', pathMatch:'full'},
      { path: 'about', component: AboutComponent },
      { path: 'accountSettings', component: AccountSettingsComponent },
      { path: 'calculationSettings', component: CalculationSettingsComponent },
      { path: 'generalSettings', component: GeneralSettingsComponent },
      { path: 'securitySettings', component: SecuritySettingsComponent },
      
    ]
  },
  { path: 'statistics', component: StatisticsComponent, resolve:{days:DataResolverService}},
  { path: 'progress', component: ProgressComponent, resolve:{days:DataResolverService} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[DataResolverService]
})
export class AppRoutingModule { }
