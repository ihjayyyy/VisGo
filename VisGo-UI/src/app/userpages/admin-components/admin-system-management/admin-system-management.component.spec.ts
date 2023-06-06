import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSystemManagementComponent } from './admin-system-management.component';

describe('AdminSystemManagementComponent', () => {
  let component: AdminSystemManagementComponent;
  let fixture: ComponentFixture<AdminSystemManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSystemManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSystemManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
