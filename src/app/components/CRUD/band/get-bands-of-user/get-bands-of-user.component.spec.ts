import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBandsOfUserComponent } from './get-bands-of-user.component';

describe('GetBandsOfUserComponent', () => {
  let component: GetBandsOfUserComponent;
  let fixture: ComponentFixture<GetBandsOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBandsOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBandsOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
