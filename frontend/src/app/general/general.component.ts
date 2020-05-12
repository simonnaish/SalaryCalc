import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog/';

import { LogInComponent } from './generalDialogs/log-in/log-in.component'
import { SignInComponent } from './generalDialogs/sign-in/sign-in.component';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoggerService } from '../services/loggerService/logger.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {

  static _dialog: MatDialog;
  static _http: LoggerService;
  static _router: Router;

  constructor(public dialog: MatDialog, private router: Router, private http: LoggerService) {
    GeneralComponent._dialog = dialog;
    GeneralComponent._http = http;
    GeneralComponent._router = router;
  }


  ngOnInit(): void {
    this.http.logOut();
  }

  static staticLogIn() {
    let generalComponent = new GeneralComponent(this._dialog, this._router, this._http);
    generalComponent.logIn();

  }

  logIn(): void {
    const dialogRef = this.dialog.open(LogInComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigateByUrl('/logged');
      }
    });
  }
  signIn() {
    const dialogRef = this.dialog.open(SignInComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigateByUrl('/logged');
      }
    })
  }

  logOut() {

  }


}
