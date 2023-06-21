import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteReportComponent } from './admin-delete-report.component';

describe('AdminDeleteReportComponent', () => {
  let component: AdminDeleteReportComponent;
  let fixture: ComponentFixture<AdminDeleteReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeleteReportComponent]
    });
    fixture = TestBed.createComponent(AdminDeleteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
