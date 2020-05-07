import { Component, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AppComponent } from 'src/app/app.component';
import { LoggerService } from 'src/app/services/logger.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogInComponent>, private _http:LoggerService) { }

  ngOnInit(): void {
  }


  logIn(username: string, password: string) {
    console.log(username, password)
    let promise=this._http.logIn(username, password).then(()=>{
      this.dialogRef.close(true);
      AppComponent.showMessage('You logged in!', 'positive')
    },
    error=>{
      AppComponent.showMessage(`Ups, something went wrong. \n
      Check if your username and password are correct.`, 'negative');
      }
    )
  }

  onExit() {
    this.dialogRef.close(false);
  }

}
