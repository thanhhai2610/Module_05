import { TestBed } from '@angular/core/testing';

import { FaccilityService } from './facility.service';

describe('FaccilityService', () => {
  let service: FaccilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaccilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
