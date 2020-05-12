import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/reuseable/confirmation-dialog/confirmation-dialog.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {


  username=localStorage.getItem('Login');

  constructor(private dialog:MatDialog, private logger: LoggerService) { }

  ngOnInit(): void {
  }

  saveChanges(){
    AppComponent.showMessage('Changes saved.', 'positive');
  }

  deleteAccount(){
    let message='Deleting your account will be permanent.\n You can still create new account but all of your collected data will be deleted.'
    const dialogRef=this.dialog.open(ConfirmationDialogComponent, {data:{'message':message}});
    dialogRef.afterClosed().subscribe((bool:boolean)=>{
      if(bool){
        //service.deleteAccount();
        this.logger.logOut();
        AppComponent.showMessage("Your account was deleted.", 'negative');
      }
    })
  }

}
