import { Component, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogInComponent>) { }

  ngOnInit(): void {
  }


  logIn(username: string, password: string) {
    // if (service.logIn(username, password)) {
      this.dialogRef.close(true);
      // AppComponent.showMessage('You logged in!', 'positive')

    // } else {
      AppComponent.showMessage(`Ups, something went wrong. \n
      Check if your username and password are correct.`, 'negative');

      // }

  }
  onExit() {
    this.dialogRef.close(false);
  }

}
