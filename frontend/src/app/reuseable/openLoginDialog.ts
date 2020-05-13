import { LogInComponent } from '../general/generalDialogs/log-in/log-in.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

export function openLoginDialog(dialog:MatDialog, router:Router):void{
    const dialogRef = dialog.open(LogInComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        router.navigateByUrl('/logged');
      }
    });
}