import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertServiceComponent } from './alert.service.component';

describe('Alert.ServiceComponent', () => {
  let component: AlertServiceComponent;
  let fixture: ComponentFixture<AlertServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
