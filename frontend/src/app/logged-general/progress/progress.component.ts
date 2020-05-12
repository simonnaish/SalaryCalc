import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModificateDialogComponent } from './modificate-dialog/modificate-dialog.component';


import { DAILY_PROGRESS } from 'src/app/reuseable/constants'
import { AppComponent } from '../../app.component';
import { DatePipe } from '@angular/common';
import { LoggerService } from 'src/app/services/loggerService/logger.service';

export interface ProgressDay {
  day: number;
  date: string;
  income: number;
  totalIncome: number;
  progress: number;
  totalProgress: number;
}

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  providers: [DatePipe],
})



export class ProgressComponent implements OnInit {

  data:any;// = DAILY_PROGRESS;

  @ViewChild('matSort', { static: true }) matSort: MatSort;
  @ViewChild('matPaginator', { static: true }) matPaginator: MatPaginator;

  Columns: string[] = ['day', 'date', 'income', 'totalIncome', 'progress', 'totalProgress', 'modificate']
  dataSource: any;

  user = JSON.parse(localStorage.getItem("User"))[0]

  constructor(private router: Router, private dialog: MatDialog, private datePipe: DatePipe, private http:LoggerService, private activatedRoute:ActivatedRoute) { }
  // days:any;


  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:{days:any})=>{this.data=data.days; console.log(this.data)},
    error=>AppComponent.showMessage('Ups, something went wrong!\nCheck your internet connection or try again later.','negative'));
    
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
    console.log(this.user)
  }

  refreshCurrentView(){
    this.router.navigateByUrl('/logged', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('progress');})
  }


  addNewRecord() {
    let day = this.getWorkDay();
    let pd = { 'day': day, 'date': this.datePipe.transform(new Date(), 'yyyy-MM-dd'), 'income': 0, 'total_income': 0, 'progress': 0, 'total_progress': 0 };

    const dialogRef=this.dialog.open(ModificateDialogComponent, {
      data: { 'record': pd, 'new': true }
    })
    dialogRef.afterClosed().subscribe(result=>this.refreshCurrentView());
   
  }


  modificateRecord(element: ProgressDay) {

    const dialogRef=this.dialog.open(ModificateDialogComponent, {
      data: { 'record': element }
    });
    dialogRef.afterClosed().subscribe(result=>this.refreshCurrentView())
    AppComponent.showMessage(`Be carefull! Remember, that total amounts are calculated automaticly. \n
    If you will change it here, mistake can appear in  the future!`, 'message')
  }

  save() {
    AppComponent.showMessage('Table saved. Check your "downloads" folder.', 'positive')
  }

  getWorkDay(): number {
    switch (this.user.payment_period) {
      case ("Daily"):
        return 1;

      case ("Weekly"):
        return new Date().getDay() + 1;

      case ("Monthly"):
        return new Date().getUTCDate();

      case ("Yearly"):
        let today = new Date();
        let first = new Date(today.getFullYear(), 0 ,1);
        console.log(today)
        console.log(first)
        let day= Math.floor((Date.parse(today.toString())-Date.parse(first.toString()))/1000/60/60/24);
        return day;
    }
  }


}
