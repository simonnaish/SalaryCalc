import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

import { APIUrl } from '../reuseable/constants'
import { DatePipe, formatDate } from '@angular/common';



@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) { }

  authUrl = APIUrl + 'api-token-auth/'
  crudUrl = APIUrl + 'progress-day/'
  signUpUrl = APIUrl + 'register/'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  }

  isLogged(): boolean {
    if (localStorage.getItem('Authorization')) {
      return true;
    }
    return false;

  }

  injectAuthToken() {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem('Authorization'));
  }
  removeAuthToken() {
    this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
  }

  register(username: string, password: string, paymentFor: string, paymentPeriod: string, currency: string, language: string,
    basicSalary: boolean, basicSalaryAmount: number, taxes: boolean, taxesAmount: number, fixCommission: boolean, commissionAmount: number, email?: string) {

    let data = {
      'username': username, 'email': email, 'password': password, 'basic_salary': basicSalary, 'basic_salary_amount': basicSalaryAmount, 'payment_for': paymentFor, 'payment_period': paymentPeriod,
      'calculate_taxes': taxes, 'taxes_amount': taxesAmount, 'fix_commission': fixCommission, 'commission_amount': commissionAmount, 'currency': currency, 'language': language
    }
    console.log(data);
    let promise = this.http.post<any>(this.signUpUrl, data).toPromise().then(result => {
      this.logIn(username, password);
    })
    return promise;
  }


  logIn(username: string, password: string): Promise<any> {
    let promise = this.http.post<any>(this.authUrl, { 'username': username, 'password': password }).toPromise().then(result => {
      localStorage.setItem('Authorization', 'Token ' + result.token);
      localStorage.setItem('Login', username);
      this.injectAuthToken();
    })
    return promise;
  }

  logOut() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Login')
    this.removeAuthToken();
  }

  createDay(day: number, date: string | Date, income: number, totalIncome: number, progress: number, totalProgress: number) {
    let fdate = formatDate(date, 'yyyy-MM-dd', this.locale);
    let promise = this.http.post(this.crudUrl, {
      'day': day, 'date': fdate, 'income': income,
      'total_income': totalIncome, 'progress': progress, 'total_progress': totalProgress
    }, this.httpOptions).toPromise().then(result => {
      console.log(result)
    },
      error => console.log(error)
    )
    return promise
  }


  modificateDay(day: number, date: string | Date, income: number, totalIncome: number, progress: number, totalProgress: number) {
    let fdate = formatDate(date, 'yyyy-MM-dd', this.locale);
    let id = localStorage.getItem('Login') + fdate.toString()
    let promise = this.http.put(this.crudUrl + id + '/', {
      'day': day, 'date': fdate, 'income': income,
      'total_income': totalIncome, 'progress': progress, 'total_progress': totalProgress
    }, this.httpOptions).toPromise().then(result => {
      console.log(result)
    },
      error => console.log(error)
    )
    return promise
  }


}
