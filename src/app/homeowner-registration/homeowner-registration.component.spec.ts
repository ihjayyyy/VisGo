import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerRegistrationComponent } from './homeowner-registration.component';

describe('HomeownerRegistrationComponent', () => {
  let component: HomeownerRegistrationComponent;
  let fixture: ComponentFixture<HomeownerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeownerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeownerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
