import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../../app.component';

import { APIUrl, APIProgressDay } from '../../reuseable/constants'
import { DatePipe, formatDate } from '@angular/common';
import { Observable } from 'rxjs';

import { code } from 'src/app/reuseable/myCrypto'



@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) { }

  authUrl = APIUrl + 'api-token-auth/'
  changePasswordUrl = APIUrl + 'change-password/'
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

  addDataToLocalStorage(result: any, username: string) {
    localStorage.setItem('Authorization', 'Token ' + result.token);
    localStorage.setItem('Login', username);
    localStorage.setItem("User", JSON.stringify(result.user_profile));
  }
  clearLocalStorage() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Login')
    localStorage.removeItem('User')
  }

  register(username: string, password: string, paymentFor: string, paymentPeriod: string, currency: string, language: string,
    basicSalary: boolean, basicSalaryAmount: number, taxes: boolean, taxesAmount: number, fixCommission: boolean, commissionAmount: number, email?: string) {

    let data = {
      'username': username, 'email': email, 'password': password, 'account_type': 'Free', 'basic_salary': basicSalary, 'basic_salary_amount': basicSalaryAmount, 'payment_for': paymentFor, 'payment_period': paymentPeriod,
      'calculate_taxes': taxes, 'taxes_amount': taxesAmount, 'fix_commission': fixCommission, 'commission_amount': commissionAmount, 'currency': currency, 'language': language
    }
    console.log(data);
    let promise = this.http.post<any>(this.signUpUrl, data).toPromise();
    return promise;
  }

  changePassword(oldPassword, newPassword): Promise<any> {
    let username = localStorage.getItem('Login')
    let codedOldPassword = code(username, oldPassword, 'code');
    let codedNewPassword = code(username, newPassword, 'code');
    console.log(code(username, codedNewPassword, 'decode'))
    console.log(codedOldPassword, codedNewPassword);
    let promise = this.http.put(this.changePasswordUrl, { 'old_password': codedOldPassword, 'new_password': codedNewPassword }, this.httpOptions).toPromise();
    return promise;
  }


  logIn(username: string, password: string): Promise<any> {
    let codedUsername = code(username, username, 'code');
    let codedPassword = code(username, password, 'code');
    let promise = this.http.post<any>(this.authUrl, { 'username': codedUsername, 'password': codedPassword }).toPromise().then(result => {
      this.addDataToLocalStorage(result, username);
      this.injectAuthToken();
    })
    return promise;
  }

  logOut() {
    this.clearLocalStorage();
    this.removeAuthToken();
  }


  //to fix!
  modificateAccount(params: {
    simple_view?: boolean, account_type?: "Free" | "Premium", basic_salary?: boolean, basic_salary_amount?: number, fix_commission?: boolean,
    commission_amount?: number, payment_period?: "Daily" | "Weekly" | "Monthly" | "Yearly", payment_for?: "Person" | "Lesson" | "Hour",
    currency?: "EUR" | "PLN" | "RUB" | "AUD" | "USD", language?: "UK" | "PL" | "ES" | "IT"
  }) {
    let promise = this.http.put(this.signUpUrl, params).toPromise()
    return promise;   
  }


  fetchData(): Observable<any> | Promise<any> {
    let promise = this.http.get(this.crudUrl, this.httpOptions)//.toPromise()
    return promise
  }

  createDay(day: number, date: string | Date, income: number, totalIncome: number, progress: number, totalProgress: number): Promise<any> {
    let fdate = formatDate(date, 'yyyy-MM-dd', this.locale);
    let promise = this.http.post(this.crudUrl, {
      'day': day, 'date': fdate, 'income': income,
      'total_income': totalIncome, 'progress': progress, 'total_progress': totalProgress
    }, this.httpOptions).toPromise().then(result => console.log(result), error => console.log(error))
    return promise
  }


  modificateDay(day: number, date: string | Date, income: number, totalIncome: number, progress: number, totalProgress: number): Promise<APIProgressDay> {
    let fdate = this.getFormatedDate(date);
    let id = this.generateId(fdate);
    let promise = this.http.put<APIProgressDay>(this.crudUrl + id + '/', {
      'day': day, 'date': fdate, 'income': income,
      'total_income': totalIncome, 'progress': progress, 'total_progress': totalProgress
    }, this.httpOptions).toPromise()
    return promise
  }

  removeDay(date: string | Date): Promise<APIProgressDay> {
    let fdate = this.getFormatedDate(date);
    let id = this.generateId(fdate);
    let promise = this.http.delete<APIProgressDay>(this.crudUrl + id, this.httpOptions).toPromise();
    return promise;
  }


  getFormatedDate(date: string | Date) {
    return formatDate(date, 'yyyy-MM-dd', this.locale);
  }
  generateId(fdate: string | Date) {
    return localStorage.getItem('Login') + fdate.toString()
  }

}
