import { TestBed } from '@angular/core/testing';

import { DistionaryService } from './dictionary.service';

describe('DistionaryService', () => {
  let service: DistionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
