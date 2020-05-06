import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

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


  constructor() { }

  ngOnInit(): void {
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
