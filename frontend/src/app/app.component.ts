import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';


import { GeneralComponent } from 'src/app/general/general.component';
import { PopUpsComponent } from 'src/app/reuseable/pop-ups/pop-ups.component';

import { MatTooltipCustomOptions, SnackBarCustomOptionsMessage, SnackBarCustomOptionsNegative, SnackBarCustomOptionsPositive } from 'src/app/reuseable/widgetsSettings'
import { LoggerService } from './services/logger.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: MatTooltipCustomOptions
  },
]
})


export class AppComponent {
  title = 'SalaryCalc';
  static _snackBar;
  public logButtonText='LogIn';


  constructor(private router: Router, private snackBar: MatSnackBar, private logger:LoggerService) {
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
      // this.logButtonText='Log In'
      AppComponent.showMessage('Thank you for your visit!\nSee you soon!','positive')

    }else{
      // this.logButtonText='Log Out'
      GeneralComponent.staticLogIn();
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
