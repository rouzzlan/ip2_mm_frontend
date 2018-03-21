import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentHomeComponent } from './instrument-home.component';

describe('InstrumentHomeComponent', () => {
  let component: InstrumentHomeComponent;
  let fixture: ComponentFixture<InstrumentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
