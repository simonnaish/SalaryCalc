import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog/';

import { LogInComponent } from '../generalDialogs/log-in/log-in.component'
import { SignInComponent } from '../generalDialogs/sign-in/sign-in.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  static _dialog: MatDialog;
  static _router: Router;

  constructor(public dialog: MatDialog, private router: Router) {
    GeneralComponent._dialog = dialog;
    GeneralComponent._router = router;
  }


  ngOnInit(): void {
  }

  static staticLogIn() {
    let generalComponent = new GeneralComponent(this._dialog, this._router);
    generalComponent.logIn();
  }

  logIn(): void {
    const dialogRef = this.dialog.open(LogInComponent);
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
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


}
