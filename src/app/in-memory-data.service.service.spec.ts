import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service.service';

describe('InMemoryData.Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    });
  });

  it('should be created', inject([InMemoryDataService], (service: InMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
