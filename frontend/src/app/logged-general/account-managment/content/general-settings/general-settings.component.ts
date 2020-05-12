import { Component, OnInit } from '@angular/core';

import {LANGUAGES_SELECT} from 'src/app/reuseable/constants'
import { AppComponent } from 'src/app/app.component';

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

  constructor() { }

  ngOnInit(): void {
    console.log(this.languageSelected)
    console.log(this.languagesSelect)
  }

  saveChanges(){
    AppComponent.showMessage('Changes saved.', 'positive');
  }

  //TODO Push Notifications

}
