import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicpieceComponent } from './list-musicpiece.component';

describe('ListMusicpieceComponent', () => {
  let component: ListMusicpieceComponent;
  let fixture: ComponentFixture<ListMusicpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMusicpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
