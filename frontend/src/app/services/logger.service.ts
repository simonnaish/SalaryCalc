import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';



@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:8000/api-token-auth/'


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
    })
    return promise;
  }

  logOut() {
    localStorage.removeItem('Authorization');
  }




  test() {

    this.injectAuthToken();
    return this.http.get<any>('http://127.0.0.1:8000/hello', this.httpOptions).toPromise().then(result => {
      console.log(result)
    })
  }

}
