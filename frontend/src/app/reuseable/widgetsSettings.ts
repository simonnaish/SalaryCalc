import { MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const MatTooltipCustomOptions: MatTooltipDefaultOptions = {
    showDelay: 800,
    hideDelay: 500,
    touchendHideDelay: 500,
  };

export const SnackBarCustomOptionsPositive:MatSnackBarConfig={
    duration:2000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
    panelClass: 'positiveSnackBar',
}

export const SnackBarCustomOptionsNegative:MatSnackBarConfig={
    duration:Infinity,
    verticalPosition: 'top',
    horizontalPosition: 'center',
    panelClass: 'negativeSnackBar',
}
export const SnackBarCustomOptionsMessage:MatSnackBarConfig={
    duration:Infinity,
    verticalPosition: 'top',
    horizontalPosition: 'center',
    panelClass: 'messageSnackBar',
}
