import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

import {APIUrl} from '../reuseable/constants'



@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http: HttpClient) { }

   url= APIUrl+'api-token-auth/'


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


  logIn(username: string, password: string):Promise<any> {
    let promise=this.http.post<any>(this.url, { 'username': username, 'password': password }).toPromise().then(result => {
      localStorage.setItem('Authorization', 'Token ' + result.token);
      this.test()
    })
    return promise;
  }

  logOut() {
    localStorage.removeItem('Authorization');
  }




  test() {

    this.injectAuthToken();
    return this.http.get<any>('http://127.0.0.1:8000/all-profiles', this.httpOptions).toPromise().then(result => {
      console.log(result)
    })
  }

}
