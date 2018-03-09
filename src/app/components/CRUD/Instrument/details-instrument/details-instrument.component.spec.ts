import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInstrumentComponent } from './details-instrument.component';

describe('DetailsInstrumentComponent', () => {
  let component: DetailsInstrumentComponent;
  let fixture: ComponentFixture<DetailsInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
