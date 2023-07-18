import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferCustomerComponent } from './fund-transfer-customer.component';

describe('FundTransferCustomerComponent', () => {
  let component: FundTransferCustomerComponent;
  let fixture: ComponentFixture<FundTransferCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundTransferCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundTransferCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
