import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMusicSheetComponent } from './create-music-sheet.component';

describe('CreateMusicSheetComponent', () => {
  let component: CreateMusicSheetComponent;
  let fixture: ComponentFixture<CreateMusicSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMusicSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMusicSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
