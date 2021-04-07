import { TestBed } from '@angular/core/testing';

import { SummaryBreakdownService } from './summary-breakdown.service';

describe('SummaryBreakdownService', () => {
  let service: SummaryBreakdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryBreakdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
