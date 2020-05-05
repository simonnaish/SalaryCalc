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
    // } else {
      // this.dialogRef.close(false);
    // }
    AppComponent.showMessage('You logged in!')

  }
  onExit() {
    this.dialogRef.close(false);
  }

}
