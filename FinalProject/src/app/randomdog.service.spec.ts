import { TestBed } from '@angular/core/testing';

import { RandomdogService } from './randomdog.service';

describe('RandomdogService', () => {
  let service: RandomdogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomdogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
