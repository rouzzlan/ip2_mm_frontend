import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEventsComponent } from './get-all-events.component';

describe('GetAllEventsComponent', () => {
  let component: GetAllEventsComponent;
  let fixture: ComponentFixture<GetAllEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
