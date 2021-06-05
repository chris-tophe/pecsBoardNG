import { TestBed } from '@angular/core/testing';

import { ArasaacApiService } from './arasaac-api.service';

describe('ArasaacApiService', () => {
  let service: ArasaacApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArasaacApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
