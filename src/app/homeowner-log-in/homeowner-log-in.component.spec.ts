import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerLogInComponent } from './homeowner-log-in.component';

describe('HomeownerLogInComponent', () => {
  let component: HomeownerLogInComponent;
  let fixture: ComponentFixture<HomeownerLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeownerLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeownerLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
