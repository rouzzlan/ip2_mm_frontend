import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMusicpieceComponent } from './create-musicpiece.component';

describe('CreateMusicpieceComponent', () => {
  let component: CreateMusicpieceComponent;
  let fixture: ComponentFixture<CreateMusicpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMusicpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMusicpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
