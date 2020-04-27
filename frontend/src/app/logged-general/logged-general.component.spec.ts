import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedGeneralComponent } from './logged-general.component';

describe('LoggedGeneralComponent', () => {
  let component: LoggedGeneralComponent;
  let fixture: ComponentFixture<LoggedGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
