import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { ProgressDay } from '../progress.component';
@Component({
  selector: 'app-modificate-dialog',
  templateUrl: './modificate-dialog.component.html',
  styleUrls: ['./modificate-dialog.component.scss']
})
export class ModificateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModificateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProgressDay) { }

  ngOnInit(): void {
  }

}
