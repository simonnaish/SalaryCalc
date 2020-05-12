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

  username=localStorage.getItem('Login');
  // =localStorage.getItem('User');
  userProfile=JSON.parse(localStorage.getItem('User'))[0];
  accountType=this.userProfile.account_type;

  constructor() { }

  ngOnInit(): void {
    // this.accountType=this.userProfile.account_type;
    console.log(this.userProfile);
    console.log(this.userProfile.account_type)
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
