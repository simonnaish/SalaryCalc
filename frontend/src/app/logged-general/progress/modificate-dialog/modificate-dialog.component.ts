import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog'
import { ProgressDay } from '../progress.component';
import { AppComponent } from 'src/app/app.component';
import { ConfirmationDialogComponent } from 'src/app/reuseable/confirmation-dialog/confirmation-dialog.component';
import { LoggerService } from 'src/app/services/logger.service';
@Component({
  selector: 'app-modificate-dialog',
  templateUrl: './modificate-dialog.component.html',
  styleUrls: ['./modificate-dialog.component.scss']
})
export class ModificateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModificateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 'record': ProgressDay, 'new': boolean }, private dialog: MatDialog, private logger:LoggerService) { }

  ngOnInit(): void {
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




saveRecord(day, date, income, totalIncome, progress, totalProgress) {
  let promise;
  if(this.data.new){
    promise=this.logger.createDay(day, date, income, totalIncome, progress, totalProgress);
  }else{
    promise=this.logger.modificateDay(day, date, income, totalIncome, progress, totalProgress);
  }
  promise.then(results=>{
    this.dialogRef.close(true);
    AppComponent.showMessage('Changes saved.', 'positive');
    },
    error=>{
      AppComponent.showMessage('Ups, something went wrong.\nChock date field. You can create only one object per date.')
    })
}

deleteRecord() {
  let message = "Full  day will be completely deleted from your database."
  const confirmationDialog = this.dialog.open(ConfirmationDialogComponent, {
    data: { 'message': message }
  })
  confirmationDialog.afterClosed().subscribe((bool: boolean) => {
    if (bool) {
      //DELETE data
      this.dialogRef.close(true);
      AppComponent.showMessage('Record deleted.', 'positive');
    }
  })

}

}
