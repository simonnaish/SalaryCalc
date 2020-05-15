import { Component, OnInit, Inject, HostListener, Output, Input, Pipe } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProgressDay, connectionMessage, savedMessage, Profile } from 'src/app/reuseable/constants';
import { LoggerService } from 'src/app/services/loggerService/logger.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  user: Profile;
  fixCommission: boolean;
  commissionAmount: number;
  userCurrency:string;

  //if fixCommission==false:
  @Input()
  paid: number = 0;

  day: number;
  date: string | Date;
  paymentType: string;

  @Output()
  progress: number;

  @Output()
  income: number;


  constructor(public dialogRef: MatDialogRef<AddNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 'record': ProgressDay, 'new': boolean }, private dialog: MatDialog, private logger: LoggerService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('User'))[0];
    this.userCurrency=this.user.currency;
    this.fixCommission = this.user.fix_commission;
    this.commissionAmount = this.user.commission_amount;
    console.log(this.user)
    this.day = this.data.record.day;
    this.date = this.data.record.date;
    this.income = this.data.record.income;
    this.progress = this.data.record.progress;
    this.paymentType = this.user.payment_for;
  }


  @HostListener("keyup.enter")
  saveRecord() { //day, date, income, totalIncome, progress, totalProgress
    console.log(this.day, this.date, this.income, this.progress);
    let promise;
    promise = this.logger.createDay(this.day, this.date, this.income, 0, this.progress, 0);

    promise.then(results => {
      this.dialogRef.close(true);
      AppComponent.showMessage(savedMessage, 'positive');
    },
      error => {
        AppComponent.showMessage(connectionMessage, "negative")
      })
  }

  plusProgress() {
    this.progress += 1;
    if (this.fixCommission) {
      this.income += this.commissionAmount;
    } else {
      this.income += Math.round(((this.paid * this.commissionAmount/100)+Number.EPSILON)*100)/100;
    }
    console.log(this.income);
  }
  minusProgress() {
    if (this.progress > 0) {
      this.progress -= 1;
      if (this.fixCommission) {

        this.income -= this.commissionAmount;
      } else {
        this.income -=Math.round(((this.paid * this.commissionAmount/100)+Number.EPSILON)*100)/100;
      }

    } else {
      AppComponent.showMessage('Progress cannot be negative.', 'negative')
    }

  }



}
