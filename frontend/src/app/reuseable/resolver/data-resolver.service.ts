import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoggerService } from 'src/app/services/loggerService/logger.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor(private http:LoggerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<any>  | Promise<any>{
    console.log(route.params['name']);
    return this.http.fetchData();
  }
}
