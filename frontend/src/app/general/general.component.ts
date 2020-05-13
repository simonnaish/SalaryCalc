import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog/';

import { LogInComponent } from './generalDialogs/log-in/log-in.component'
import { SignInComponent } from './generalDialogs/sign-in/sign-in.component';
import { LoggerService } from '../services/loggerService/logger.service';

import{openLoginDialog}from 'src/app/reuseable/openLoginDialog'

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private http: LoggerService) {
  
  }


  ngOnInit(): void {
    this.http.logOut();
  }


  logIn(): void {
    openLoginDialog(this.dialog, this.router);
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
