import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanregisterComponent } from './view-loanregister.component';

describe('ViewLoanregisterComponent', () => {
  let component: ViewLoanregisterComponent;
  let fixture: ComponentFixture<ViewLoanregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoanregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
