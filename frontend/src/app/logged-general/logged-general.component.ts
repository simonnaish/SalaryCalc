import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-general',
  templateUrl: './logged-general.component.html',
  styleUrls: ['./logged-general.component.scss']
})
export class LoggedGeneralComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToProgress(){
    this.router.navigateByUrl('progress');
  }
  goToStatistics(){
    this.router.navigateByUrl('statistics');
  }
  goToAccountManagment(){
    this.router.navigateByUrl('account')
  }
}
