import { TestBed, inject } from '@angular/core/testing';

import { MusicpieceService } from './musicpiece.service';

describe('MusicpieceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicpieceService]
    });
  });

  it('should be created', inject([MusicpieceService], (service: MusicpieceService) => {
    expect(service).toBeTruthy();
  }));
});
