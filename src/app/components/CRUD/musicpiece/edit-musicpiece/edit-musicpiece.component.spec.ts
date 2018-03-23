import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMusicpieceComponent } from './edit-musicpiece.component';

describe('EditMusicpieceComponent', () => {
  let component: EditMusicpieceComponent;
  let fixture: ComponentFixture<EditMusicpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMusicpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMusicpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
