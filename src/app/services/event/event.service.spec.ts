import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  let component: EventService;
  let fixture: ComponentFixture<EventService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
