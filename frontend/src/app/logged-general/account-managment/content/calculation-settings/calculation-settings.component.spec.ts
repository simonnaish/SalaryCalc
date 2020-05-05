import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationSettingsComponent } from './calculation-settings.component';

describe('CalculationSettingsComponent', () => {
  let component: CalculationSettingsComponent;
  let fixture: ComponentFixture<CalculationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
