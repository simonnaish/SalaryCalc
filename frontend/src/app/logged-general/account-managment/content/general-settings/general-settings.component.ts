import { Component, OnInit } from '@angular/core';

import {LANGUAGES_SELECT, connectionMessage, savedMessage} from 'src/app/reuseable/constants'
import { AppComponent } from 'src/app/app.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {
  
  user=JSON.parse(localStorage.getItem('User'))[0];
  
  languageSelected=this.user.language;
  languagesSelect=LANGUAGES_SELECT;
    
  
  salaryTime=true;
  forgotToUpdate=false;
  newses=true;

  constructor(private logger:LoggerService) { }

  ngOnInit(): void {
    console.log(this.languageSelected)
    console.log(this.languagesSelect)
  }

  saveChanges(){
    this.logger.modificateAccount({language:this.languageSelected}).then(result=>{
      AppComponent.showMessage(savedMessage,'positive')
    },
    error=>{
      AppComponent.showMessage(connectionMessage, 'negative');
    })
  }

  //TODO Push Notifications

}
