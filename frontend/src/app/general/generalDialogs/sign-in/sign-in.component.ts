import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

import { PAYMENT_FOR_GROUP, PAYMENT_RADIOS_GROUP } from 'src/app/reuseable/constants'
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
 
})
export class SignInComponent implements OnInit {

  termsCheckbox = false;
  paymentPeriodGroup = PAYMENT_RADIOS_GROUP;
  paymentPeriod = 'Monthly'
  trueOrFalseGroup = ['Yes', 'No']
  basicSalaryRadio = 'No'
  basicSalaryAmount = 0;
  taxesRadio = 'No';
  taxesAmount = 0;
  fixCommission = 'Yes'
  commissionAmount = 0;
  commissionPercent = 0;
  paymentForGroup = PAYMENT_FOR_GROUP;
  paymentFor = 'Hour'

  // basicSalaryCtrl=new FormControl('No')
  // paymentPeriodCtrl=new FormControl('Weekly')

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<SignInComponent>, private logger:LoggerService) { }


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
    
    let _basicSalary;
    if(this.basicSalaryRadio=="Yes"){
      _basicSalary=true
    }else{
      _basicSalary=false
    }
    let _taxes;
    if(this.taxesRadio=="Yes"){
      _taxes=true;
    }else{
      _taxes=false;
    }
    let _commissionAmount;
    if(this.fixCommission){
      _commissionAmount=this.commissionAmount
    }else{
      _commissionAmount=this.commissionPercent;
    }
    let _fixCommission;
    if(this.fixCommission=="Yes"){
      _fixCommission=true;
    }else{
      _fixCommission=false;
    }
    
    let _currency='EUR'
    let _language='UK'

    this.logger.register(_username, _password, this.paymentFor, this.paymentPeriod, _currency, _language,
       _basicSalary, this.basicSalaryAmount, _taxes, this.taxesAmount, _fixCommission, _commissionAmount, _email).then(result=>{
      AppComponent.showMessage('Your account was created.\n You will be redirectedy to your page in a few seconds!', 'positive');
      this.dialogRef.close(true);
    },
    error=>{
      AppComponent.showMessage('Ups, something went wrong.\n Check your internet connection or try again later.', 'negative');
    }
    )

    // service.createAccount(_username, _password, _email, this.paymentPeriod, 
      // this.basicSalaryRadio, this.basicSalaryAmount, this.taxesRadio, this.taxesAmount, 
      // this.paymentFor, this.fixCommission, this.commissionAmount, this.commissionPercent)

      // service.logIn(_username, _password);
      
  }

}
