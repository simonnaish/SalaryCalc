import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { MatTooltipCustomOptions, SnackBarCustomOptionsMessage, SnackBarCustomOptionsNegative, SnackBarCustomOptionsPositive } from 'src/app/reuseable/widgetsSettings'
import { MatDialog } from '@angular/material/dialog';


import { GeneralComponent } from 'src/app/general/general.component';
import { PopUpsComponent } from 'src/app/reuseable/pop-ups/pop-ups.component';
import { LoggerService } from './services/loggerService/logger.service';

import{openLoginDialog}from 'src/app/reuseable/openLoginDialog'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})


export class AppComponent {
  title = 'SalaryCalc';
  static _snackBar;
  public logButtonText='LogIn';


  constructor(private router: Router, private snackBar: MatSnackBar, private logger:LoggerService, public dialog:MatDialog) {
    AppComponent._snackBar = snackBar;

  }


  static showMessage(message: string, type?: 'positive' | 'negative' | 'message') {
    let config:MatSnackBarConfig;
    let icon:string;
    let iconAlt:string;
    switch (type) {
      case ('positive'):
        icon='positiveSnackBarIcon.svg';
        iconAlt='tickIcon';
        config = SnackBarCustomOptionsPositive;
        break;
      case ('negative'):
        icon='negativeSnackBarIcon.svg';
        iconAlt='XIcon';
        config = SnackBarCustomOptionsNegative;
        break;
      default:
        icon='messageSnackBarIcon.svg';
        iconAlt="questionIcon"
        config = SnackBarCustomOptionsMessage;
        break;
    }
    this._snackBar.openFromComponent(PopUpsComponent, {
      data: {'message':message, 'icon':icon, 'iconAlt':iconAlt},
      action:'close',
      ...config,
    })
  }

  logIn() {
    if(this.logger.isLogged()){
      this.logger.logOut()
      this.router.navigateByUrl('/')
      AppComponent.showMessage('Thank you for your visit!\nSee you soon!','positive')

    }else{
      openLoginDialog(this.dialog, this.router);
    }
  }

  setLogInButton(){
    if(!this.logger.isLogged()){
      return 'specialAction';
    }else{
      return 'logged'
    }
  }


}
