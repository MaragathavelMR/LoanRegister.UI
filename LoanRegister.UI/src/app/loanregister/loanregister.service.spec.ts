import { TestBed } from '@angular/core/testing';

import { LoanregisterService } from './loanregister.service';

describe('LoanregisterService', () => {
  let service: LoanregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
