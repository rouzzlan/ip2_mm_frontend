import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstrumententComponent } from './edit-instrumentent.component';

describe('EditInstrumententComponent', () => {
  let component: EditInstrumententComponent;
  let fixture: ComponentFixture<EditInstrumententComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstrumententComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstrumententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
