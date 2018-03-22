import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewMusicSheetsComponent } from './overview-music-sheets.component';

describe('OverviewMusicSheetsComponent', () => {
  let component: OverviewMusicSheetsComponent;
  let fixture: ComponentFixture<OverviewMusicSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewMusicSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewMusicSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
