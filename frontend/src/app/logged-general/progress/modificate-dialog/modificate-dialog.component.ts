import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog'


import { AppComponent } from 'src/app/app.component';
import { ConfirmationDialogComponent } from 'src/app/reuseable/confirmation-dialog/confirmation-dialog.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';

import {connectionMessage, ProgressDay} from 'src/app/reuseable/constants'



@Component({
  selector: 'app-modificate-dialog',
  templateUrl: './modificate-dialog.component.html',
  styleUrls: ['./modificate-dialog.component.scss'],

})
export class ModificateDialogComponent implements OnInit {

  day:number;
  date:string|Date;
  income:number;
  totalIncome:number;
  progress:number;
  totalProgress:number;


  constructor(public dialogRef: MatDialogRef<ModificateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 'record': ProgressDay, 'new': boolean }, private dialog: MatDialog, private logger:LoggerService) { }

  ngOnInit(): void {
    this.day=this.data.record.day;
    this.date=this.data.record.date;
    this.income=this.data.record.income;
    this.totalIncome=this.data.record.totalIncome;
    this.progress=this.data.record.progress;
    this.totalProgress=this.data.record.totalProgress;
  }

  return() {
    if (!this.data.new){
      this.dialogRef.close(false);
  }else{
    let message="If you will close it now, your changes will be lost."
    const confirmationDialog=this.dialog.open(ConfirmationDialogComponent, {
      data:{'message':message}
    })
    confirmationDialog.afterClosed().subscribe((bool:boolean)=>{
      if(bool){
        this.dialogRef.close(false);
      }
    })
  }
  
}



@HostListener("keyup.enter")
saveRecord() { //day, date, income, totalIncome, progress, totalProgress
  let promise;
  if(this.data.new){
    promise=this.logger.createDay(this.day, this.date, this.income, this.totalIncome, this.progress, this.totalProgress);
  }else{
    promise=this.logger.modificateDay(this.day, this.date, this.income, this.totalIncome, this.progress, this.totalProgress);
  }
  promise.then(results=>{
    this.dialogRef.close(true);
    AppComponent.showMessage('Changes saved.', 'positive');
    },
    error=>{
      AppComponent.showMessage(connectionMessage, "negative")
    })
}

deleteRecord() {
  let message = "Full  day will be completely deleted from your database."
  const confirmationDialog = this.dialog.open(ConfirmationDialogComponent, {
    data: { 'message': message }
  })
  confirmationDialog.afterClosed().subscribe((bool: boolean) => {
    if (bool) {
      this.logger.removeDay(this.date);
      this.dialogRef.close(true);
      AppComponent.showMessage('Record deleted.', 'positive');
    }
  })

}

}
