import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModificateDialogComponent } from './modificate-dialog/modificate-dialog.component';


import { AppComponent } from '../../app.component';
import { LoggerService } from 'src/app/services/loggerService/logger.service';

import {getWorkDay} from 'src/app/reuseable/helpFunctions'
import { savedTable, unsecureChange, connectionMessage, ProgressDay } from 'src/app/reuseable/constants';
// import { DAILY_PROGRESS } from 'src/app/reuseable/constants'


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
    this.activatedRoute.data.subscribe((data:{days:any})=>{this.data=data.days},
    error=>AppComponent.showMessage(connectionMessage,'negative'));
    
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
  }

  refreshCurrentView(){
    this.router.navigateByUrl('/logged', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('progress');})
  }


  addNewRecord() {
    let day =getWorkDay(this.user.payment_period);
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
    AppComponent.showMessage(unsecureChange, 'message')
  }

  save() {
    AppComponent.showMessage(savedTable, 'positive')
  }



}
