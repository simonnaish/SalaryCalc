import { Component, OnInit } from '@angular/core';

import {CURRENCIES, PAYMENT_FOR_GROUP, PAYMENT_RADIOS_GROUP, Profile} from 'src/app/reuseable/constants'
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-calculation-settings',
  templateUrl: './calculation-settings.component.html',
  styleUrls: ['./calculation-settings.component.scss']
})
export class CalculationSettingsComponent implements OnInit {

  currencies=CURRENCIES

  user:Profile;

  userCurrency:string;
  basicSalaryCheckbox:boolean;
  basicSalaryAmount:number;
  basicSalaryForm='visible';
  fixCommission:'percent'|'fixed';
  commissionAmount:number;
  paymentForGroup=PAYMENT_FOR_GROUP;
  paymentFor:string;
  paymentPeriodGroup=PAYMENT_RADIOS_GROUP;
  paymentPeriod:string;


  constructor() { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('User'))[0];
    this.userCurrency=this.user.currency;
    this.basicSalaryCheckbox=this.user.basic_salary;
    this.basicSalaryAmount=this.user.basic_salary_amount;
    this.fixCommission=this.user.fix_commission?'percent':'fixed';
    this.commissionAmount=this.user.commission_amount;
    this.paymentFor=this.user.payment_for;
    this.paymentPeriod=this.user.payment_period;
    
    
    // this.basicSalaryVisibility();
  }

  basicSalaryVisibility(){
    if (this.basicSalaryCheckbox==false){
      this.basicSalaryForm= 'visible'
    }else{
      this.basicSalaryForm ='unvisible'
    }
  }

  saveChanges(){
    AppComponent.showMessage('Changes saved.', 'positive');
  }

}
