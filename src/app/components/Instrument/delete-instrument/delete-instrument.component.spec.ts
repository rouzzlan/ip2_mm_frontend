import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInstrumentComponent } from './delete-instrument.component';

describe('DeleteInstrumentComponent', () => {
  let component: DeleteInstrumentComponent;
  let fixture: ComponentFixture<DeleteInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
