import { Component, OnInit } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogInComponent>) { }

  ngOnInit(): void {
  }


  onYesClick(username:string, password:string){
    this.dialogRef.close(true);
  }
  onExit(){
    this.dialogRef.close(false);
  }

  }
