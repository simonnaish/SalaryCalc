import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModificateDialogComponent } from './modificate-dialog/modificate-dialog.component';


import { DAILY_PROGRESS } from 'src/app/reuseable/constants'
import { AppComponent } from '../../app.component';
import { DatePipe } from '@angular/common';

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
  providers:[DatePipe],
})



export class ProgressComponent implements OnInit {

  data = DAILY_PROGRESS;

  @ViewChild('matSort', { static: true }) matSort: MatSort;
  @ViewChild('matPaginator', { static: true }) matPaginator: MatPaginator;

  Columns: string[] = ['day', 'date', 'income', 'totalIncome', 'progress', 'totalProgress', 'modificate']
  dataSource: any;


  constructor(private router: Router, private dialog: MatDialog, private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;

  }


  addNewRecord() {
   let pd={'day':0, 'date':this.datePipe.transform(new Date(),'dd-MM-yyyy'), 'income':0, 'totalIncome':0, 'progress':0, 'totalProgress':0};
    
    this.dialog.open(ModificateDialogComponent, {
      data: {'record':pd, 'new':true}
    })
  }


  modificateRecord(element: ProgressDay) {

    this.dialog.open(ModificateDialogComponent, {
      data: {'record':element}
    });

    AppComponent.showMessage(`Be carefull! Remember, that total amounts are calculated automaticly. \n
    If you will change it here, mistake can appear in  the future!`, 'message')
  }

  save(){
    AppComponent.showMessage('Table saved. Check your "downloads" folder.','positive' )
  }

}
