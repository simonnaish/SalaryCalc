import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkTableExporterModule } from 'cdk-table-exporter';
import { MatPaginatorModule } from '@angular/material/paginator/';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {ChartsModule} from 'ng2-charts'


// import { MatCardModule } from '@angular/material/card';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatFormFieldControl } from '@angular/material/form-field';

// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTooltipModule,
        MatStepperModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatTableExporterModule,
        CdkTableExporterModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatSelectModule,
        MatButtonToggleModule,
        ScrollingModule,
        ChartsModule,
        MatSnackBarModule,

        // MatCardModule,
        // MatTabsModule,
        // MatBadgeModule,
        // MatDividerModule,
        // MatExpansionModule,
      
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatTableExporterModule,
        CdkTableExporterModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatSelectModule,
        MatButtonToggleModule,
        ScrollingModule,
        ChartsModule,
        MatSnackBarModule,
        
        // MatCardModule,
        // MatTabsModule,
        // MatBadgeModule,
        // MatDividerModule,
        // MatExpansionModule,
    ],
    providers: []
})
export class MaterialModule { }
