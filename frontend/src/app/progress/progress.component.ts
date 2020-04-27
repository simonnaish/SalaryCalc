import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModificateDialogComponent } from './modificate-dialog/modificate-dialog.component';


export interface ProgressDay{
  day:number;
  date:string;
  income:number;
  total:number;
  progress:number;
}

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})



export class ProgressComponent implements OnInit {

  data = [{ 'day': 1, 'date': '20-01-2020', 'income': 12, 'total': 12, 'progress': 3 },
  { 'day': 2, 'date': '20-02-2020', 'income': 15, 'total': 17, 'progress': 4 }] //TODO

  @ViewChild('matSort', { static: true }) matSort: MatSort;
  @ViewChild('matPaginator', { static: true }) matPaginator: MatPaginator;

  Columns: string[] = ['day', 'date', 'income', 'total', 'progress', 'modificate']
  dataSource: any;


  constructor(private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;

  }

  goToGeneral(){
    this.router.navigateByUrl('logged')
  }

  modificateDay(element:ProgressDay){
  this.dialog.open(ModificateDialogComponent, {
    data:element
  });
  }

}
