// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed, async, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { AppComponent } from './app/app.component';
import { LoggerService } from './app/services/loggerService/logger.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{ MatDialogHarness } from '@angular/material/dialog/testing'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './app/general/general.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
beforeEach(async(() => {
  TestBed.configureTestingModule({
      // declarations: [ LoggerService ],
      imports:[ 
          HttpClientTestingModule, 
      ]
  }).compileComponents();
}));



beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent],
    // providers: [LoggerService],
  }).compileComponents();
}));

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};


// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
