import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStatementCustomerComponent } from './mini-statement-customer.component';

describe('MiniStatementCustomerComponent', () => {
  let component: MiniStatementCustomerComponent;
  let fixture: ComponentFixture<MiniStatementCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniStatementCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniStatementCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
