import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { MaterialModule } from './material.module';
import { LogInComponent } from './generalDialogs/log-in/log-in.component';
import { SignInComponent } from './generalDialogs/sign-in/sign-in.component';
import { LoggedGeneralComponent } from './logged-general/logged-general.component';
import { ProgressComponent } from './logged-general/progress/progress.component';
import { StatisticsComponent } from './logged-general/statistics/statistics.component';
import { AccountManagmentComponent } from './logged-general/account-managment/account-managment.component';
import { AboutComponent } from './logged-general/account-managment/content/about/about.component';
import { AccountSettingsComponent } from './logged-general/account-managment/content/account-settings/account-settings.component';
import { CalculationSettingsComponent } from './logged-general/account-managment/content/calculation-settings/calculation-settings.component';
import { GeneralSettingsComponent } from './logged-general/account-managment/content/general-settings/general-settings.component';
import { SecuritySettingsComponent } from './logged-general/account-managment/content/security-settings/security-settings.component';
import { ModificateDialogComponent } from './logged-general/progress/modificate-dialog/modificate-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    LogInComponent,
    SignInComponent,
    LoggedGeneralComponent,
    ProgressComponent,
    StatisticsComponent,
    AccountManagmentComponent,
    AboutComponent,
    AccountSettingsComponent,
    CalculationSettingsComponent,
    GeneralSettingsComponent,
    SecuritySettingsComponent,
    ModificateDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
