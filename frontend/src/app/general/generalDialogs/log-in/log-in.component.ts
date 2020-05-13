import { Component, OnInit, HostListener } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AppComponent } from 'src/app/app.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],

})
export class LogInComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogInComponent>, private _http:LoggerService) { }

  usernameInput:string;
  passwordInput:string;

  ngOnInit(): void {
  }

  @HostListener("keyup.enter")
  logIn() {
    // console.log(this.usernameInput, this.passwordInput)
    let promise=this._http.logIn(this.usernameInput, this.passwordInput).then(()=>{
      this.dialogRef.close(true);
      AppComponent.showMessage('You logged in!', 'positive')
    },
    error=>{
      AppComponent.showMessage(`Ups, something went wrong. \n
      Check if your username and password are correct.`, 'negative');
      }
    )
  }

  @HostListener("keyup.esc")
  onExit() {
    this.dialogRef.close(false);
  }

  

}