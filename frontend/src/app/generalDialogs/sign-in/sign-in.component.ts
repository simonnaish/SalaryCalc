import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

import { PAYMENT_FOR_GROUP, PAYMENT_RADIOS_GROUP } from 'src/app/reuseable/constants'
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  termsCheckbox = false;
  paymentPeriodGroup = PAYMENT_RADIOS_GROUP;
  paymentPeriod = 'Monthly'
  trueOrFalseGroup = ['Yes', 'No']
  basicSalaryRadio = 'No'
  basicSalaryAmount = 0;
  taxesRadio = 'No';
  taxesAmount = 18;
  fixCommission = 'Yes'
  commissionAmount = 20;
  commissionPercent = 10;
  paymentForGroup = PAYMENT_FOR_GROUP;
  paymentFor = 'Hour'

  // basicSalaryCtrl=new FormControl('No')
  // paymentPeriodCtrl=new FormControl('Weekly')

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<SignInComponent>) { }


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      usernameCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.nullValidator],
      termsCtrl: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      paymentPeriodCtrl: Validators.required
    });
    this.thirdFormGroup = this._formBuilder.group({
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }


  createAccount() {
    let _username = this.firstFormGroup.get('usernameCtrl').value;
    let _password = this.firstFormGroup.get('passwordCtrl').value;
    let _email = this.firstFormGroup.get('emailCtrl').value;

    let service;
    // service.createAccount(_username, _password, _email, this.paymentPeriod, 
      // this.basicSalaryRadio, this.basicSalaryAmount, this.taxesRadio, this.taxesAmount, 
      // this.paymentFor, this.fixCommission, this.commissionAmount, this.commissionPercent)

      // service.logIn(_username, _password);
      AppComponent.showMessage(_username, _password)
      this.dialogRef.close();
  }

}
