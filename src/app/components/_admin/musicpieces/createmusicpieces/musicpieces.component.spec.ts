import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicpiecesComponent } from './musicpieces.component';

describe('MusicpiecesComponent', () => {
  let component: MusicpiecesComponent;
  let fixture: ComponentFixture<MusicpiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicpiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicpiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
