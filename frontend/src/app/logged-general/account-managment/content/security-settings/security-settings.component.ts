import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';
import { passwordChangeSuccess, passwordChangeError } from 'src/app/reuseable/constants';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.scss']
})
export class SecuritySettingsComponent implements OnInit {

  dataToAnalize = true;
  dataToShare = true;
  allowedFriends = ['Max', 'Pax', "Lex", "Nobody", 'Mickey Mouse', 'Hulk', 'EinKleiJegemeister', 'Superman', 'Rick', 'Morty',
    'Flinston', 'MrWeed', 'Robby', 'Naish', 'And']


  constructor(private http:LoggerService) { }

  ngOnInit(): void {
  }


  changePassword(oldPassword:string, newPassword:string){
    this.http.changePassword(oldPassword, newPassword).then(result=>{
      AppComponent.showMessage(passwordChangeSuccess, 'positive')
    },
    error=>{
      AppComponent.showMessage(passwordChangeError, 'negative');
    })
  }

  deleteFromFriends(person: any) {
    AppComponent.showMessage('Friend deleted from list.', 'positive')
  }

  addToFriends(email: string) {
    AppComponent.showMessage(email + ' added to your friends list.', 'positive')
  }

  saveChanges() {
    AppComponent.showMessage('Changes saved.', 'positive')
  }



}
