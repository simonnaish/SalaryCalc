import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LogInComponent } from './generalDialogs/log-in/log-in.component';
import { GeneralComponent } from './general/general.component';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SalaryCalc';

  constructor(private router:Router){}

  LogIn(){
    // GeneralComponent.staticLogIn();
    this.router.navigateByUrl('logged')
  }
}
