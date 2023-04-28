import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLogInComponent } from './visitor-log-in.component';

describe('VisitorLogInComponent', () => {
  let component: VisitorLogInComponent;
  let fixture: ComponentFixture<VisitorLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
