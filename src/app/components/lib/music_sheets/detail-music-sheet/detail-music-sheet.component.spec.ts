import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMusicSheetComponent } from './detail-music-sheet.component';

describe('DetailMusicSheetComponent', () => {
  let component: DetailMusicSheetComponent;
  let fixture: ComponentFixture<DetailMusicSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMusicSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMusicSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
