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
import { ProgressComponent } from './progress/progress.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AccountManagmentComponent } from './account-managment/account-managment.component';
import { AboutComponent } from './account-managment/content/about/about.component';
import { AccountSettingsComponent } from './account-managment/content/account-settings/account-settings.component';
import { CalculationSettingsComponent } from './account-managment/content/calculation-settings/calculation-settings.component';
import { GeneralSettingsComponent } from './account-managment/content/general-settings/general-settings.component';
import { SecuritySettingsComponent } from './account-managment/content/security-settings/security-settings.component';
import { ModificateDialogComponent } from './progress/modificate-dialog/modificate-dialog.component';




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
