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

  currentCurrency={'name':'EUR', 'symbol':'€'}
  basicSalaryCheckbox=true;
  basicSalaryForm='visible';
  currentCommission=12;
  commissionCalc='fixed';
  paymentForGroup=PAYMENT_FOR_GROUP;
  paymentFor='Hour'
  paymentPeriodGroup=PAYMENT_RADIOS_GROUP;
  paymentPeriod="Monthly"


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
