import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-managment',
  templateUrl: './account-managment.component.html',
  styleUrls: ['./account-managment.component.scss']
})
export class AccountManagmentComponent implements OnInit {

  menuVisibility='visible';
  buttonTransition='topButton'
  menuTransition='visibleMenu';

  constructor() { }

  ngOnInit(): void {
  }


  menuButton(){
    if (this.menuTransition == 'visibleMenu'){
      // this.menuVisibility='hidden';
      this.buttonTransition='regularButton'
      this.menuTransition='unvisibleMenu';
    }else{
      // this.menuVisibility='visible';
      this.buttonTransition='topButton';
      this.menuTransition='visibleMenu';
    }
  }

}
