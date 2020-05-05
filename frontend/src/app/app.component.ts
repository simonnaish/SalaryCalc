import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { LogInComponent } from './generalDialogs/log-in/log-in.component';
import { GeneralComponent } from './general/general.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'SalaryCalc';
  static _snackBar;

  constructor(private router: Router, private snackBar: MatSnackBar) {
    AppComponent._snackBar=snackBar;
  } 

  static showMessage(message:string, type?:'positive' | 'negative' | 'message'){
    this._snackBar.open(message);
  }

  LogIn() {
    GeneralComponent.staticLogIn();
    // this.router.navigateByUrl('logged')
  }


}
