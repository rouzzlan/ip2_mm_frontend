import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBandsComponent } from './get-bands.component';

describe('GetBandsComponent', () => {
  let component: GetBandsComponent;
  let fixture: ComponentFixture<GetBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
