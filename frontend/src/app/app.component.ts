import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';


import { GeneralComponent } from 'src/app/general/general.component';
import { PopUpsComponent } from 'src/app/reuseable/pop-ups/pop-ups.component';

import { MatTooltipCustomOptions, SnackBarCustomOptionsMessage, SnackBarCustomOptionsNegative, SnackBarCustomOptionsPositive } from 'src/app/reuseable/widgetsSettings'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: MatTooltipCustomOptions
  }]
})


export class AppComponent {
  title = 'SalaryCalc';
  static _snackBar;
  static _router: Router;


  constructor(private router: Router, private snackBar: MatSnackBar) {
    AppComponent._snackBar = snackBar;
    AppComponent._router = router;

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

  LogIn() {
    // AppComponent.showMessage('testing', 'message');

    GeneralComponent.staticLogIn();
    // this.router.navigateByUrl('logged')
  }


}
