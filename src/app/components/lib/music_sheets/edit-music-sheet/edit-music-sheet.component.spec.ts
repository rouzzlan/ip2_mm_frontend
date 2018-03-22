import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMusicSheetComponent } from './edit-music-sheet.component';

describe('EditMusicSheetComponent', () => {
  let component: EditMusicSheetComponent;
  let fixture: ComponentFixture<EditMusicSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMusicSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMusicSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
