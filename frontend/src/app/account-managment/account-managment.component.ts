import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-managment',
  templateUrl: './account-managment.component.html',
  styleUrls: ['./account-managment.component.scss']
})
export class AccountManagmentComponent implements OnInit {

  menuVisibility='visible';
  buttonTransition='topButton'
  constructor() { }

  ngOnInit(): void {
  }


  menuButton(){
    if (this.menuVisibility == 'visible'){
      this.menuVisibility='hidden';
      this.buttonTransition='regularButton'
    }else{
      this.menuVisibility='visible';
      this.buttonTransition='topButton'
    }
  }

}
