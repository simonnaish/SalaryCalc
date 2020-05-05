import { Component, OnInit } from '@angular/core';

import {LANGUAGES_SELECT} from 'src/app/reuseable/constants'

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {

  languageSelected={'name':'English', 'id':'UK'}
  languagesSelect=LANGUAGES_SELECT;

  salaryTime=true;
  forgotToUpdate=false;
  newses=true;

  constructor() { }

  ngOnInit(): void {
  }

  //TODO Push Notifications

}
