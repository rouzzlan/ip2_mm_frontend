import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMusicpieceComponent } from './detail-musicpiece.component';

describe('DetailMusicpieceComponent', () => {
  let component: DetailMusicpieceComponent;
  let fixture: ComponentFixture<DetailMusicpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMusicpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMusicpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
