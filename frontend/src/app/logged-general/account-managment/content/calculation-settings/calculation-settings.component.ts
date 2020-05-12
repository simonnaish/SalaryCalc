import { Component, OnInit } from '@angular/core';

import {CURRENCIES, PAYMENT_FOR_GROUP, PAYMENT_RADIOS_GROUP} from 'src/app/reuseable/constants'
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-calculation-settings',
  templateUrl: './calculation-settings.component.html',
  styleUrls: ['./calculation-settings.component.scss']
})
export class CalculationSettingsComponent implements OnInit {

  currencies=CURRENCIES

  user=JSON.parse(localStorage.getItem('User'))[0]

  currentCurrency=this.user.currency;
  basicSalaryCheckbox=this.user.basic_salary;
  basicSalaryForm='visible';
  currentCommission=this.user.commission_amount;
  commissionCalc=this.user.fixed_commission?'percent':'fixed';
  paymentForGroup=PAYMENT_FOR_GROUP;
  paymentFor=this.user.payment_for
  paymentPeriodGroup=PAYMENT_RADIOS_GROUP;
  paymentPeriod=this.user.payment_period


  constructor() { }

  ngOnInit(): void {
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
