import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppComponent } from '../app.component';

import { ProgressDay, APIProgressDay, Profile } from 'src/app/reuseable/constants'
import { getWorkDay, getDaysToSalary } from 'src/app/reuseable/helpFunctions'


@Component({
  selector: 'app-logged-general',
  templateUrl: './logged-general.component.html',
  styleUrls: ['./logged-general.component.scss'],

})
export class LoggedGeneralComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  user:Profile;
  userCurrency:string;

  fetchedData: APIProgressDay[];
  dayOfWork: number;
  dayToSalary: number;
  incomeInTotal: number;
  incomePerDay: number;
  progressInTotal: number;
  progressPerDay: number;
  currentSalary: number;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("User"))[0]
    this.userCurrency=this.user.currency;
    this.activatedRoute.data.subscribe((data: { days: any }) => { this.fetchedData = data.days },
      error => AppComponent.showMessage('Ups, something went wrong!\nCheck your internet connection or try again later.', 'negative'));
    this.setUpStatistics();


  }

  setUpStatistics() {
    let listLength = this.fetchedData.length;
    this.dayOfWork = getWorkDay(this.user.payment_period);
    this.dayToSalary = getDaysToSalary(this.dayOfWork, this.user.payment_period);
    this.incomeInTotal = this.fetchedData[listLength - 1].total_income;
    this.incomePerDay = Math.round((this.incomeInTotal / listLength) * 100) / 100;
    this.progressInTotal = this.fetchedData[listLength - 1].total_progress;
    this.progressPerDay = Math.round((this.progressInTotal / listLength) * 100) / 100;
    // if (this.user.basic_salary) {
      this.currentSalary = this.user.basic_salary_amount + this.incomeInTotal;
    // }
  }

  goToProgress() {
    this.router.navigateByUrl('progress');
  }
  goToStatistics() {
    this.router.navigateByUrl('statistics');
  }
  goToAccountManagment() {
    this.router.navigateByUrl('account')
  }
}
