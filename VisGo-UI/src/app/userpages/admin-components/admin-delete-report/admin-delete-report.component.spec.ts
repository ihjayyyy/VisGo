import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteReportComponent } from './admin-delete-report.component';

describe('AdminDeleteReportComponent', () => {
  let component: AdminDeleteReportComponent;
  let fixture: ComponentFixture<AdminDeleteReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
