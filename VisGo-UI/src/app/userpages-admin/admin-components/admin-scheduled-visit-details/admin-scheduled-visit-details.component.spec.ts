import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduledVisitDetailsComponent } from './admin-scheduled-visit-details.component';

describe('AdminScheduledVisitDetailsComponent', () => {
  let component: AdminScheduledVisitDetailsComponent;
  let fixture: ComponentFixture<AdminScheduledVisitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScheduledVisitDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminScheduledVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
