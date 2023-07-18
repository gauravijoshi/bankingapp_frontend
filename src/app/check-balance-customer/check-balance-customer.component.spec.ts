import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBalanceCustomerComponent } from './check-balance-customer.component';

describe('CheckBalanceCustomerComponent', () => {
  let component: CheckBalanceCustomerComponent;
  let fixture: ComponentFixture<CheckBalanceCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBalanceCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBalanceCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
