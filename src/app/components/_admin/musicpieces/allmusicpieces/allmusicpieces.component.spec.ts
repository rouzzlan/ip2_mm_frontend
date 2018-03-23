import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmusicpiecesComponent } from './allmusicpieces.component';

describe('AllmusicpiecesComponent', () => {
  let component: AllmusicpiecesComponent;
  let fixture: ComponentFixture<AllmusicpiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmusicpiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmusicpiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
