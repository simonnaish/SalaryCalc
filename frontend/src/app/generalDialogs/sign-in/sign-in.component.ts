import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
 
import {PAYMENT_FOR_GROUP, PAYMENT_RADIOS_GROUP} from 'src/app/reuseable/constants'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  termsCheckbox=false;
  paymentPeriodGroup=PAYMENT_RADIOS_GROUP;
  paymentPeriod='Monthly'
  trueOrFalseGroup=['Yes','No']
  basicSalaryRadio='No'
  taxesRadio='No'
  fixCommission='Yes'
  paymentForGroup=PAYMENT_FOR_GROUP;
  paymentFor='Hour'

  // basicSalaryCtrl=new FormControl('No')
  // paymentPeriodCtrl=new FormControl('Weekly')

  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  fifthFormGroup:FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.firstFormGroup=this._formBuilder.group({
      usernameCtrl:['',Validators.required],
      passwordCtrl:['',Validators.required],
      termsCtrl:['',Validators.required],

    });
    this.secondFormGroup=this._formBuilder.group({
      paymentPeriodCtrl:Validators.required
    });
    this.thirdFormGroup=this._formBuilder.group({
    });
    this.fourthFormGroup=this._formBuilder.group({
      fourthCtrl:['',Validators.required]
    });
    this.fifthFormGroup=this._formBuilder.group({
      fifthCtrl:['',Validators.required]
    });
  }

}
