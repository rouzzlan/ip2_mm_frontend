import { TestBed, inject } from '@angular/core/testing';

import { MusicSheetService } from './music-sheet.service';

describe('MusicSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicSheetService]
    });
  });

  it('should be created', inject([MusicSheetService], (service: MusicSheetService) => {
    expect(service).toBeTruthy();
  }));
});
