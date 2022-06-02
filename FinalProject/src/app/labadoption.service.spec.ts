import { TestBed } from '@angular/core/testing';

import { LabadoptionService } from './labadoption.service';

describe('LabadoptionService', () => {
  let service: LabadoptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabadoptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
