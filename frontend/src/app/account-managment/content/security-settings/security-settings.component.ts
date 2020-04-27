import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.scss']
})
export class SecuritySettingsComponent implements OnInit {

  dataToAnalize=true;
  dataToShare=true;
  allowedFriends=['Max', 'Pax', "Lex", "Nobody", 'Mickey Mouse', 'Hulk', 'EinKleiJegemeister', 'Superman', 'Rick', 'Morty',
'Flinston','MrWeed','Robby','Naish','And']


  constructor() { }

  ngOnInit(): void {
  }

  deleteFromFriends(person:any){

  }

  addToFriends(email:string){

  }

}
