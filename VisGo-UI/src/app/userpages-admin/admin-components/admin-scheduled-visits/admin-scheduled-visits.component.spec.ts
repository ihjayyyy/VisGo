import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduledVisitsComponent } from './admin-scheduled-visits.component';

describe('AdminScheduledVisitsComponent', () => {
  let component: AdminScheduledVisitsComponent;
  let fixture: ComponentFixture<AdminScheduledVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScheduledVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminScheduledVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
