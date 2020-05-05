import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificateDialogComponent } from './modificate-dialog.component';

describe('ModificateDialogComponent', () => {
  let component: ModificateDialogComponent;
  let fixture: ComponentFixture<ModificateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
