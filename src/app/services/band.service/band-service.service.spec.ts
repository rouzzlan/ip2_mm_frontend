import { TestBed, inject } from '@angular/core/testing';

import { BandServiceService } from './band-service.service';

describe('BandServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandServiceService]
    });
  });

  it('should be created', inject([BandServiceService], (service: BandServiceService) => {
    expect(service).toBeTruthy();
  }));
});
