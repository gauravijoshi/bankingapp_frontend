import { TestBed } from '@angular/core/testing';

import { BalancecheckService } from './balancecheck.service';

describe('BalancecheckService', () => {
  let service: BalancecheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancecheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
