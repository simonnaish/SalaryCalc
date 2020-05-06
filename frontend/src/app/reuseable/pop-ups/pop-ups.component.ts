import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.scss']
})
export class PopUpsComponent implements OnInit {

  constructor(private snackBarRef: MatSnackBarRef<PopUpsComponent>, @Inject(MAT_SNACK_BAR_DATA) public data:any){  }


  ngOnInit(): void {
  }


  closeSnackBar():void{
    this.snackBarRef.dismiss();
  }

}
