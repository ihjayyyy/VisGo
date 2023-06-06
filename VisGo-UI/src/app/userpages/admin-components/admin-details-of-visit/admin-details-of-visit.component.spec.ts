import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsOfVisitComponent } from './admin-details-of-visit.component';

describe('AdminDetailsOfVisitComponent', () => {
  let component: AdminDetailsOfVisitComponent;
  let fixture: ComponentFixture<AdminDetailsOfVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailsOfVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailsOfVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
