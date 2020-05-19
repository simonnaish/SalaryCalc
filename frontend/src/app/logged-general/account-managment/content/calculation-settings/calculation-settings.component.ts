import { Component, OnInit } from '@angular/core';

import { CURRENCIES, PAYMENT_FOR_GROUP, PAYMENT_RADIOS_GROUP, Profile } from 'src/app/reuseable/constants'
import { AppComponent } from 'src/app/app.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';
import { savedMessage, connectionMessage } from 'src/app/reuseable/constants'

@Component({
  selector: 'app-calculation-settings',
  templateUrl: './calculation-settings.component.html',
  styleUrls: ['./calculation-settings.component.scss']
})
export class CalculationSettingsComponent implements OnInit {

  currencies = CURRENCIES

  user: Profile;

  userCurrency: string;
  basicSalaryCheckbox: boolean;
  basicSalaryAmount: number;
  basicSalaryForm = 'visible';
  fixCommission: 'percent' | 'fixed';
  commissionAmount: number;
  paymentForGroup = PAYMENT_FOR_GROUP;
  paymentFor: 'Person' | 'Lesson' | 'Hour';
  paymentPeriodGroup = PAYMENT_RADIOS_GROUP;
  paymentPeriod: "Daily" | 'Weekly' | 'Monthly' | 'Yearly';


  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('User'))[0];
    this.userCurrency = this.user.currency;
    this.basicSalaryCheckbox = this.user.basic_salary;
    this.basicSalaryAmount = this.user.basic_salary_amount;
    this.fixCommission = this.user.fix_commission ? 'percent' : 'fixed';
    this.commissionAmount = this.user.commission_amount;
    this.paymentFor = this.user.payment_for;
    this.paymentPeriod = this.user.payment_period;


    // this.basicSalaryVisibility();
  }

  basicSalaryVisibility() {
    if (this.basicSalaryCheckbox == false) {
      this.basicSalaryForm = 'visible'
    } else {
      this.basicSalaryForm = 'unvisible'
    }
  }

  saveChanges() {
    let fixCommissionBool:boolean=this.fixCommission=='fixed'?true:false;
    // if (this.fixCommission == 'fixed') {
      // fixCommissionBool = true
    // } else {
      // fixCommis/sionBool = false;
    // }/
    console.log(fixCommissionBool)
    this.logger.modificateAccount({
      'basic_salary': this.basicSalaryCheckbox, 'basic_salary_amount': this.basicSalaryAmount, 'fix_commission': fixCommissionBool,
      'commission_amount': this.commissionAmount, 'payment_for': this.paymentFor, 'payment_period': this.paymentPeriod
    }).then(result => {
      AppComponent.showMessage(savedMessage, 'positive')
    },
      error => {
        AppComponent.showMessage(connectionMessage, 'negative')
      })

    AppComponent.showMessage('Changes saved.', 'positive');
  }

}
